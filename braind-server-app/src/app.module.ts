import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mySqlConfig } from './entities/config/typeormconfig';
import { DatabaseVectorizeService } from './llama/databse-vectorize.service';
import { SportProduct } from './entities/sport_product.entitie';

@Module({
  imports: [TypeOrmModule.forRoot(mySqlConfig),
    TypeOrmModule.forFeature([SportProduct])
  ],
  controllers: [AppController],
  providers: [AppService,DatabaseVectorizeService],
})
export class AppModule {}
