
import { createParamDecorator } from '@nestjs/common';
import { Carro } from 'src/carro/entities/carro.entity';
export const GetCarro = createParamDecorator(
  (data, req): Carro => {
    const Carro = req.args[0].Carro;
    return Carro;
  },
);
