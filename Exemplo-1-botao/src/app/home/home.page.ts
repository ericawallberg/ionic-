import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  //este é o texto que pode ser encontrada no campo de texto de default para depois ser alterado pelo
  texto = "O texto do campo de texto vai aparecer aqui.";
  //este é o texto que o utilizador insere
  texto_input : string;
  // esta é a função que é chamada quando o botão é clicado, que auto explicativa
  mudarTexto(){
    this.texto = this.texto_input;
  }
}
