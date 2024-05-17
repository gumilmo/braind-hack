import { Injectable } from '@nestjs/common';
import { SportProduct } from './entities/sport_product.entitie';
import { DataSource, DataSourceOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ColumnInfo, TableDataDto, TableInfo } from './dto/table-data.dto';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(SportProduct)
    private readonly sportProducts: Repository<SportProduct>,
    private dataSource: DataSource
  )
  {}

  public async getPrompt(prompt: string): Promise<string> {
    return prompt+'2132132';
  }

  public async tesProducts(): Promise<SportProduct[]> {
    const items: SportProduct[] = await this.sportProducts.find();
    items.forEach((item: SportProduct) => {
      console.log(item);
    });

    return items;
  }

  public async excecuteRawSql(sqlQuery: string = "SELECT views, guid from sport_products"): Promise<TableDataDto> {
    const items =  await this.dataSource.query(sqlQuery);
    console.log(items)

    if (!items || items.length === 0) {
      return {} as TableDataDto;
    }

    const tableInfo: TableInfo = {
      Columns: Object.keys(items[0]).map(key => {
        return {
          Accessor: key,
          Header: key
        } as ColumnInfo
      })
    } as TableInfo;

    const result = {
      Items: items,
      TableInfo: tableInfo
    } as TableDataDto

    return result;
  }
}
