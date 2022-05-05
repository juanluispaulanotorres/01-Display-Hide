import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent {

  @ViewChild("boton") boton!: ElementRef;
  @ViewChild("imagen") imagen!: ElementRef;

  constructor(private renderer: Renderer2) { }

  toggle() {
    let btn = this.boton.nativeElement;
    let img = this.imagen.nativeElement;

    if (btn['innerText'] == "Enseñar") {
      this.renderer.removeClass(img, "hidden");
      this.renderer.addClass(img, "shown");
      btn['innerHTML'] = "Esconder";

    } else {
      this.renderer.removeClass(img, "shown");
      this.renderer.addClass(img, "hidden");
      btn['innerHTML'] = "Enseñar";
    }
  }
}
