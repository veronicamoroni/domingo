import { Injectable } from '@nestjs/common';

@Injectable()
export class EjemploService {
   obtenerEjemplo(): string {
     return '1';
   }
   crearEjemplo(): string {
     return '2';
   }
}
