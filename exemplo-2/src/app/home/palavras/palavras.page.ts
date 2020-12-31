import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.page.html',
  styleUrls: ['./palavras.page.scss'],
})
export class PalavrasPage implements OnInit {

  array: any[]=[];
  generateRandomNumber(numberOfCharacters) : string{
    var randomValues = '';
    var stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';  
    var sizeOfCharacter = stringValues.length;
    for (var i = 0; i < numberOfCharacters; i++) {
       randomValues = randomValues+stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
    }
    return randomValues;
 } 

  constructor() { 
    for(var i=0;i<50;i++){
      this.array[i]= i+1 +" - " + this.generateRandomNumber(10);
  } }

  ngOnInit() {
  }

}
