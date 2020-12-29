import { Component, OnInit } from '@angular/core';
import { Pais } from './conteudo.model'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage implements OnInit {
  paises: Pais[] = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.svg.png',
      ordem: 1,
      descricao: 'Portugal'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png',
      ordem: 2,
      descricao: 'Espanha'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png',
      ordem: 3,
      descricao: 'França'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
      ordem: 4,
      descricao: 'Alemanha'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
      ordem: 5,
      descricao: 'Países Baixos'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png',
      ordem: 6,
      descricao: 'Itália'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/125px-Flag_of_Denmark.svg.png',
      ordem: 7,
      descricao: 'Dinamarca'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png',
      ordem: 8,
      descricao: 'Polónia'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/125px-Flag_of_Norway.svg.png',
      ordem: 9,
      descricao: 'Noruega'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/125px-Flag_of_Sweden.svg.png',
      ordem: 10,
      descricao: 'Suécia'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/125px-Flag_of_Finland.svg.png',
      ordem: 11,
      descricao: 'Finlândia'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/255px-Flag_of_Estonia.svg.png',
      ordem: 12,
      descricao: 'Estónia'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/200px-Flag_of_Iceland.svg.png',
      ordem: 13,
      descricao: 'Islândia'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/200px-Flag_of_Slovakia.svg.png',
      ordem: 14,
      descricao: 'Eslováquia'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/255px-Flag_of_Greece.svg.png',
      ordem: 15,
      descricao: 'Grécia'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/255px-Flag_of_Luxembourg.svg.png',
      ordem: 16,
      descricao: 'Luxemburgo'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
