import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';
import { DeudoresModule } from './deudores/deudores.module';
import { ReferenciaPersonalModule } from './referencia-personal/referencia-personal.module';
import { DatoLaboralModule } from './dato-laboral/dato-laboral.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { TipoGestionModule } from './tipo-gestion/tipo-gestion.module';
import { GestionModule } from './gestion/gestion.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra:{
        ssl: process.env.STAGE === 'prod' ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: process.env.STAGE === 'dev',
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    CommonModule,

    SeedModule,

    AuthModule,

    DeudoresModule,

    ReferenciaPersonalModule,

    DatoLaboralModule,

    CuentasModule,

    TipoGestionModule,

    GestionModule,
  ],
})
export class AppModule {}
