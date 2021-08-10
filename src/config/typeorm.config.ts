import { TypeOrmModuleOptions } from '@nestjs/typeorm';


const typeOrmConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "APIPESSOAS",
    entities: [
        "../**/*.entity.ts"
    ],
    migrations: [
        "../database/migrations/*.ts"
    ],
    cli: {
        "migrationsDir": "../database/migrations"
    }
}

module.exports = typeOrmConfig;
