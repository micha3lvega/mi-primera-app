import { Component, OnInit } from '@angular/core';

// para usar en el template mas de una linea se necesita usar el backtick
@Component({
  selector: 'app-inline',
  template: `<span>Back</span>
    <br />
    <span>Tick</span>`,
  styles: [
    `
      span {
        color: red;
      }
    `,
  ],
})
export class InlineComponent {}
