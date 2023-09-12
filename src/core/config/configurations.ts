import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';


dotenv.config();

export const getDatabaseConfigurations: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true,
};

export default () => ({
    APP: {
        name: process.env.NAME,
        description: process.env.DESCRIPTION,
        globalPrefix: process.env.GLOBAL_PREFIX,
        version: process.env.API_VERSION,
        port: parseInt(process.env.PORT) || 3000,
        clientUrl: process.env.CLIENT_URL,
      },
    
    DATABASE: getDatabaseConfigurations,
    
});