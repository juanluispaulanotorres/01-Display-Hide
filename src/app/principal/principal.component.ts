import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent {
  btnText = 'Ocultar';
  show = true;

  constructor(private renderer: Renderer2) { }

  displayHide() {

    this.show = !this.show;

    if (!this.show) {
      this.btnText = 'Mostrar';
    } else {
      this.btnText = 'Ocultar';
    }

  }
}
