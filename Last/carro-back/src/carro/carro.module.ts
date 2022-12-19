import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarroController } from './carro.controller';
import { CarroService } from './carro.service';
import { Carro } from './entities/carro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Carro]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [CarroController],
  providers: [CarroService],
})
export class CarroModule {}
