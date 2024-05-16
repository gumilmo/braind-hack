import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { SportProduct } from "../sport_product.entitie";

export const mySqlConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test_braind_1',
    entities: [SportProduct],
    synchronize: true
};