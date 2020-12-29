import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalavrasPage } from './palavras.page';

const routes: Routes = [
  {
    path: '',
    component: PalavrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalavrasPageRoutingModule {}
