import { Component } from '@angular/core';
import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';



const { Filesystem, Directories } = Plugins;
const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  a_processar: boolean = false;
  numero_a_incrementar: number;
  numero_a_decrementar: number;
  /**
   * numeros decrementados
   */
  numeros_inc: number[] = [];
  /**
   * numeros decrementados
   */
  numeros_dec: number[] = [];


  statechangeText = () => {
    if (this.a_processar == true) {
      return "stop";
    } else {
      return "start";
    }
  }

  //adicionado o backgroundMode para activar a funcionalidade de ter coisas a correr em backgroud
  //adicionada o filesystem para mexer em ficheiros do sistema
  constructor() {
  }

  changeProcessState() {
    if (this.a_processar === false) {
      this.statApplicationDirectory();
      //backgroundMode : BackgroundMode;
      //backgroundMode.enable();
    }
  }

  async statApplicationDirectory() {
    const info = await Filesystem.stat({ path: '/', directory: Directories.Application });
    console.log('Stat Info: ', info);
  }
}