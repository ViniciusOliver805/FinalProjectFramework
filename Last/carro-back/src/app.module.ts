import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarroModule } from './carro/carro.module';
import { Carro } from './carro/entities/carro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'carrobase',
      entities: [Carro],
      synchronize: true,
      logging: true,
    }),
    CarroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
