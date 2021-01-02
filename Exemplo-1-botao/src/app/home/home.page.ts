import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  texto = "O texto do campo de texto vai aparecer aqui.";
  texto_input : string;
  constructor() {}
  mudarTexto(){
    this.texto = this.texto_input;
  }
}
