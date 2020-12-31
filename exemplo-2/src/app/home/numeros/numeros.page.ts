import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  array: any[]=[];

  constructor() { 
    for(var i=1;i<=1000;i++){
      this.array[i-1]=i;
  } }

  ngOnInit() {
  }

}
