import { Component, OnInit } from '@angular/core';
import { Persona } from './../persona/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  disableButton = true;
  labelButton = 'Disable';
  classButton = 'btn btn-danger';
  clicks: number = 0;
  textValue: string = '';

  name: string;
  lastName: string;

  personas: Persona[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.disableButton = false;
      this.labelButton = 'Enable';
      this.classButton = 'btn btn-primary';
    }, 3000);
  }

  onClick(): void {
    this.clicks++;
  }

  onAddPerson(): void {
    let persona = new Persona(this.name, this.lastName);
    this.personas.push(persona);
    this.name = null;
    this.lastName = null;
  }
}
