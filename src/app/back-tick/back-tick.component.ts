import { Component, OnInit } from '@angular/core';

// para usar en el template mas de una linea se necesita usar el backtick
@Component({
  selector: 'app-back-tick',
  template: `<span>Back</span>
    <br />
    <span>Tick</span>`,
})
export class BackTickComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
