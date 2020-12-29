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
      img: 'https://commons.wikimedia.org/wiki/File:Flag_of_Portugal.svg',
      ordem: 1,
      descricao: 'Portugal'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Spain&psig=AOvVaw2GXQr2upARrL__GSNxnuho&ust=1609196496468000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDN1J6i7-0CFQAAAAAdAAAAABAD',
      ordem: 2,
      descricao: 'Espanha'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_France&psig=AOvVaw0Qe6neX6Ay1fSx3HG3d2Cg&ust=1609196510979000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi9zKWi7-0CFQAAAAAdAAAAABAD',
      ordem: 3,
      descricao: 'França'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FFicheiro%3AFlag_of_Germany.svg&psig=AOvVaw3o1EDS2AEku1GUlgbXygR-&ust=1609196542429000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDwz7Si7-0CFQAAAAAdAAAAABAD',
      ordem: 4,
      descricao: 'Alemanha'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FPa%25C3%25ADses_Baixos&psig=AOvVaw1cNQxJ01L4kdQ3djO43F0R&ust=1609196562197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDeg76i7-0CFQAAAAAdAAAAABAD',
      ordem: 5,
      descricao: 'Países Baixos'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Italy&psig=AOvVaw2q3ahh--PChotNGoe2QW95&ust=1609196590540000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCjw8ui7-0CFQAAAAAdAAAAABAD',
      ordem: 6,
      descricao: 'Itália'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Denmark&psig=AOvVaw2swJ66FVZ9HebLCtBk0MEF&ust=1609196614073000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDR4dai7-0CFQAAAAAdAAAAABAD',
      ordem: 7,
      descricao: 'Dinamarca'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FFicheiro%3AFlag_of_Poland.svg&psig=AOvVaw2RbgGfOHNoADGN09usEfR2&ust=1609196638178000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjoo-Ki7-0CFQAAAAAdAAAAABAD',
      ordem: 8,
      descricao: 'Polónia'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FFicheiro%3AFlag_of_Norway.svg&psig=AOvVaw2bao69ZxerDZGljSPaLBrB&ust=1609196666125000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKi83u-i7-0CFQAAAAAdAAAAABAD',
      ordem: 9,
      descricao: 'Noruega'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Sweden&psig=AOvVaw3Ffmb_lONffbwuse-jT27p&ust=1609196684475000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj3qvii7-0CFQAAAAAdAAAAABAD',
      ordem: 10,
      descricao: 'Suécia'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.countryflags.com%2Fproduct%2Ffinland-flag-package%2F&psig=AOvVaw35cgnjpB0CXp9_DqnTZW_5&ust=1609196700329000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD25v-i7-0CFQAAAAAdAAAAABAD',
      ordem: 11,
      descricao: 'Finlândia'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Estonia&psig=AOvVaw3XwZt38_MFy-YnHDtAoZf0&ust=1609196721953000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCgnoqj7-0CFQAAAAAdAAAAABAD',
      ordem: 12,
      descricao: 'Estónia'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Iceland&psig=AOvVaw3joKiz65g65fXTPE6k4G92&ust=1609196742515000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD_hZSj7-0CFQAAAAAdAAAAABAD',
      ordem: 13,
      descricao: 'Islândia'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FEslov%25C3%25A1quia&psig=AOvVaw0nsUtgxZ3IKh8aJrSCB1jn&ust=1609196769844000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDPiKGj7-0CFQAAAAAdAAAAABAI',
      ordem: 14,
      descricao: 'Eslováquia'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Greece&psig=AOvVaw0QWzWDWwTixqqYaMsZXqBU&ust=1609196789915000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjQzaqj7-0CFQAAAAAdAAAAABAD',
      ordem: 15,
      descricao: 'Grécia'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-Luxembourg&psig=AOvVaw1mTWl_9R_LY3wtAH7gNYkT&ust=1609196813961000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNijibaj7-0CFQAAAAAdAAAAABAD',
      ordem: 16,
      descricao: 'Luxemburgo'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
