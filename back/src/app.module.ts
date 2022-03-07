import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entities/Users";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        Users,
      ],
      migrations: [__dirname + '/src/migrations/*.ts'],
      cli: { migrationsDir: 'src/migrations' },
      autoLoadEntities: true,
      charset: 'utf8mb4',
      synchronize: false,
    }),
  ],
  providers: [ConfigService],
})
export class AppModule {}
