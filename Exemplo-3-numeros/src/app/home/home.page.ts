import { Component } from '@angular/core';
//para ter acesso ao filesystem é preciso incluir o FilesystemDirectory e o FilesystemEncoding
import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
const { Filesystem, Toast } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


/**
 * Nome do ficheiro
 */
const fileName = "numbers.txt";

export class HomePage {
  a_processar: boolean = false;
  values_set = false;
  ficheiro_existe = false;
  numero_a_incrementar: number;
  numero_a_decrementar: number;

  /**
   * números decrementados
   */
  numeros_inc: number[] = [];
  /**
   * números decrementados
   */
  numeros_dec: number[] = [];

  /**
   * O texto para o botão
   */
  statechangeText = () => {
    if (this.a_processar == true) {
      return "stop";
    } else {
      return "start";
    }
  }

  constructor() {}

  //função chamado pelo botão no toolbar para parar e começar o processo. 
  //este processo corre em async o que quer dizer que esta função pode receber
  async changeProcessState() {
    //verifica se o processo está a correr
    if (this.a_processar === false) {
      //se nao estiver ve se os valores ja foram defendidos
      if (this.values_set === false) {
        //primeiro abrir o ficheiro para verificar se existe e ler o seu conteúdo e lo verificar
        let ficheiro = await this.abrirFicheiro();
      } 
      this.a_processar = true;
      await this.fazNumeros();
    } else {
      this.a_processar = false;
    }
  }

  public sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * "thread" que fica a processar numeros
   * TODO: melhorar esta parte com uma thread a serio
   */
  async fazNumeros() {
    Toast.show({
      text: "Processo começado."
    });
    while (this.a_processar) {
      //adiciona so números quando eles incrementam ao inicio do array
      this.numeros_inc.unshift(++this.numero_a_incrementar);
      this.numeros_dec.unshift(--this.numero_a_decrementar);
      // se for possível ler o ficheiro será inserido será guardado os numeros atuais no ficheiro
      if(this.ficheiro_existe)
        this.saveInFile();
      await this.sleep(10000);
    }
    Toast.show({
      text: "Processo terminado."
    });
  }


  /**
   * salva os números no ficheiro
   */
  saveInFile(){
    let conteudos = Filesystem.writeFile({
      path: fileName,
      data: this.numero_a_incrementar + "\n" + this.numero_a_decrementar,
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8,
      recursive: false
    });
  }

  /**
   * tenta abrir o ficheiro,se nao conseguir, escreve um novo
   */
  async abrirFicheiro() {
    if (!this.values_set) {
      //tentar abrir o ficheiro para leitura
      try {
        //função de leitura dos ficheiros
        let returnFile = await Filesystem.readFile({
          //nome do ficheiro (numbers.txt)
          path: fileName,
          //diretório do ficheiro
          directory: FilesystemDirectory.Documents,
          encoding: FilesystemEncoding.UTF8
        });
        
        //divide as linhas do input por enters
        let lines = returnFile.data.split('\n');
        //verifica se os numeros sao convertiveis para numeros
        if(isNaN(+lines[0]) || isNaN(+lines[1])){
          //mostra um toast para informar que os valores não são legíveis
          Toast.show({
            text: "Não são valores validos no ficheiro."
          });
          throw TypeError();
        }
        
        //convert e adiciona os números as suas respetivas variáveis 
        this.numero_a_incrementar = +lines[0];
        this.numero_a_decrementar = +lines[1];
        
        this.values_set = true;
        
        Toast.show({
          text: "Ficheiro lido com os numeros iniciais:" + this.numero_a_incrementar + " e " + this.numero_a_decrementar + " ."
        });
        
      } catch (e) {
        Toast.show({
          text: "Erro a ler o ficheiro, criar um novo."
        })

        //gerar numeros
        this.numero_a_incrementar = Math.floor(((99999 - 10000) * Math.random()) + 10000);
        this.numero_a_decrementar = Math.floor(((99999 - 10000) * Math.random()) + 10000);
        
        //tentar criar um ficheiro
        try {
          this.saveInFile();
          Toast.show({
            text: "Ficheiro criado."
          });
          this.ficheiro_existe = true;
        } catch (e) {
          //com isto também é possível correr este código no browser, thou ele não vai enviar os toasts 
          Toast.show({
            text: "Não consigo criar um ficheiro, usar só a memoria."
          });
          this.ficheiro_existe = false;
        }
      }
      this.values_set = true;
      
    }
  }
}
