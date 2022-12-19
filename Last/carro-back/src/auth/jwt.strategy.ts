import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Carro } from '../carro/entities/carro.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Carro)
    private carroRepository: Repository<Carro>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'super-secret',
    });
  }

  async validate(payload: { carroId: number }) {
    const { carroId } = payload;
    const Carro = await this.carroRepository.findOneBy({ carroId });
    if (!Carro) {
      throw new UnauthorizedException('Tente Novamente!');
    }

    return Carro;
  }
}
