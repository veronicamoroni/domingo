import { Controller, Get, Post } from '@nestjs/common';
import { EjemploService } from './ejemplo.service';

@Controller('ejemplo')
export class EjemploController {
  constructor(private readonly ejemploService: EjemploService) {}

    @Get()
    getEjemplo(): string {
      return this.ejemploService.obtenerEjemplo();
    } 
    
    @Post()
    postEjemplo(): string {
      return this.ejemploService.crearEjemplo();
    } 
}
