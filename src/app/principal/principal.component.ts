import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  btnText = 'Ocultar';
  show = true;

  constructor() {}

  displayHide() {
    this.show = !this.show;

    if (!this.show) {
      this.btnText = 'Mostrar';
    } else {
      this.btnText = 'Ocultar';
    }
  }
}
