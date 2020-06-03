import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: '<h4>Componente simple</h4>',
})
export class SimpleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
