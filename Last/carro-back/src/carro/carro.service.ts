import {
  Injectable, NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carro } from './entities/carro.entity';

@Injectable()
export class CarroService { //cria os metodos pro crud

  constructor(
    @InjectRepository(Carro)
    private CarroRepository: Repository<Carro>,
  ) {}


  async findAll(): Promise<Carro[]> { 
    try {
      return await this.CarroRepository.find();
    } catch (err) {
      console.log('Carro Não Encontrado, tente novamente!');
      return null;
    }
  }

  async findOne(id: number): Promise<Carro> {

    const Carro = this.CarroRepository.createQueryBuilder('Carro')
      .select(['Carro.id', 'Carro.nomeCarro'])
      .getOne();
    if (!Carro) throw new NotFoundException('Carro Não Encontrado, tente novamente!');

    return Carro;

  }

 
  async findByNome(nomeDocarro: string): Promise<Carro> {
    return await this.CarroRepository.findOneBy({  nomeDocarro });
  }
 
  async remove(CarroId: number) {
    const result = await this.CarroRepository.delete({ carroId: CarroId });
    if (result.affected === 0) {
      throw new NotFoundException(
        'ID incorreto, tente outro!',
      );
    }

  }

}
