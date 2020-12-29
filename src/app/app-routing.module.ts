import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    loadChildren: () => import('./home/numeros/numeros.module').then(m => m.NumerosPageModule)
  },
  {
    path: 'palavras',
    loadChildren: () => import('./home/palavras/palavras.module').then(m => m.PalavrasPageModule)
  },
  {
    path: 'conteudo',
    loadChildren: () => import('./home/conteudo/conteudo.module').then(m => m.ConteudoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
