import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { SportProduct } from './entities/sport_product.entitie';
import { TableDataDto } from './dto/table-data.dto';

@ApiTags('main')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query('prompt') prompt: string): Promise<SportProduct[]> {
    return await this.appService.tesProducts();
    //return await this.appService.getPrompt(prompt);
  }

  @Get("get-data")
  async getData(@Query('prompt') prompt: string): Promise<TableDataDto> {
    //const sql = ...
    return await this.appService.excecuteRawSql();
  }
}
