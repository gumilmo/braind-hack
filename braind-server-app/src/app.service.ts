import { Injectable } from '@nestjs/common';
import { SportProduct } from './entities/sport_product.entitie';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(SportProduct)
    private readonly sportProducts: Repository<SportProduct>
  )
  {}

  public async getPrompt(prompt: string): Promise<string> {
    return prompt+'2132132';
  }

  public async tesProducts(): Promise<void> {
    const items: SportProduct[] = await this.sportProducts.find();
    items.forEach((item: SportProduct) => {
      console.log(item);
    });
  }
}
