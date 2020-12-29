import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'numeros',
    loadChildren: () => import('./numeros/numeros.module').then( m => m.NumerosPageModule)
  },
  {
    path: 'palavras',
    loadChildren: () => import('./palavras/palavras.module').then( m => m.PalavrasPageModule)
  },
  {
    path: 'conteudo',
    loadChildren: () => import('./conteudo/conteudo.module').then( m => m.ConteudoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
