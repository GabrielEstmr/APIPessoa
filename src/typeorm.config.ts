import { TypeOrmModuleOptions } from '@nestjs/typeorm';



const typeOrmConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "APIPESSOAS",
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    // entities: ["./**/*.entity{.ts,.js}"],
    migrations: ["../database/migrations/*.ts"],
    cli: { migrationsDir: "../database/migrations" }
}

module.exports = typeOrmConfig;

