import {
  Column, Entity, PrimaryGeneratedColumn 
} from 'typeorm';

@Entity('tbl_carro')
export class Carro {

  @PrimaryGeneratedColumn('uuid') //classe que modela no banco, vai ser visivel no banco de dados, cada atributo uma coluna no banco
  carroId: number;

  @Column()
  nomeDocarro: string;

  @Column()
  tabelaFipe: number;

  @Column()
  informacoes: string;
  

}
