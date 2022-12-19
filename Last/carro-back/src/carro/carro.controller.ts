import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  // UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { CarroService } from './carro.service';


@Controller('carro')
export class CarroController {
  constructor(private readonly CarroService: CarroService) {}

 /* @Post()
  create(@Body() createUserDto: CreateCarroDto) {
    return this.CarroService.create(createUserDto);
  }*/

  @Get()
  findAll() {
    return this.CarroService.findAll();
  }

  @Get('/list/:id')
  findOne(@Param('id') id: number) {
    return this.CarroService.findOne(id);
  }



  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.CarroService.remove(id);
    return {
      message: 'Seleção removido com sucesso!',
    };
  }
}
