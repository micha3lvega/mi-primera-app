import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  nombre: string = 'Michael';
  apellido: string = 'Vega';
  private edad: number = 27;

  getEdad(): number {
    return this.edad;
  }
}
