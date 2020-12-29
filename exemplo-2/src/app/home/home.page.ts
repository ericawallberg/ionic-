import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   constructor(
    private router:Router
   ){ }

  btn1Clicked(){
    console.log("btn1 Clicked");
    this.router.navigate(['numeros']);
  }

  btn2Clicked(){
    console.log("btn2 Clicked");
    this.router.navigate(['palavras'])
  }

  btn3Clicked(){
    console.log("btn3 Clicked");
    this.router.navigate(['conteudo'])
  }

}
