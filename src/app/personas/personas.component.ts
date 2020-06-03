import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  disableButton = true;
  labelButton = 'Disable';
  classButton = 'btn btn-danger';

  ngOnInit(): void {
    setTimeout(() => {
      this.disableButton = false;
      this.labelButton = 'Enable';
      this.classButton = 'btn btn-primary';
    }, 3000);
  }
}
