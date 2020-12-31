import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
const { Filesystem, Toast } = Plugins;

const fileName = "/numbers.txt";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  a_processar: boolean = false;
  values_set = false;
  ficheiro_existe = false;
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

  async changeProcessState() {
    if (this.a_processar === false) {
      if (this.values_set === false) {
        let ficheiro = await this.abrirFicheiro();
      } 
      this.a_processar = true;
      await this.fazNumeros();
      //backgroundMode : BackgroundMode;
      //backgroundMode.enable();
    } else {
      this.a_processar = false;
    }
  }

  public delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * "thread" que fica a processar numeros
   * TODO: melhorar esta parte com uma thread a serio
   */
  async fazNumeros() {
    while (this.a_processar) {
      Toast.show({
        text: "Processo começado."
      });
      this.numeros_inc.push(++this.numero_a_incrementar);
      this.numeros_dec.push(--this.numero_a_decrementar);
      await this.delay(10000);
    }
    Toast.show({
      text: "Processo terminado."
    });
  }



  /**
   * tenta abrir o ficheiro,se nao conseguir, escreve um novo
   */
  async abrirFicheiro() {
    if (!this.values_set) {
      //tentar abrir o ficheiro para leitura
      try {
        let returnFile = await Filesystem.readFile({
          path: fileName,
          directory: FilesystemDirectory.Data,
          encoding: FilesystemEncoding.UTF8
        });

        Toast.show({
          text: "!!!FILE CONTENTES = " + returnFile.data + " !!!!!!"
        });

        let lines = returnFile.data.split('\n');
        this.numero_a_incrementar = +lines[0];
        this.numero_a_decrementar = +lines[1];
        this.values_set = true;

        return returnFile.data;
      } catch (e) {
        Toast.show({
          text: "Ficheiro não existe, criar um novo."
        })

        //gerar numeros
        this.numero_a_incrementar = Math.floor(((99999 - 10000) * Math.random()) + 10000);
        this.numero_a_decrementar = Math.floor(((99999 - 10000) * Math.random()) + 10000);




        //tentar criar um ficheiro
        /*
        try {
          let conteudos = Filesystem.writeFile({
            path: fileName,
            data: this.numero_a_incrementar + "\n" + this.numero_a_decrementar,
            directory: FilesystemDirectory.Data,
            encoding: FilesystemEncoding.UTF8,
            recursive: false
          });
          Toast.show({
            text: "Ficheiro criado."
          });
          this.ficheiro_existe = true;
        } catch (e) {
          Toast.show({
            text: "Não consigo criar um ficheiro, usar só a memoria."
          });
          this.ficheiro_existe = false;
        }*/
        this.values_set = true;
      }
    }
  }
}
