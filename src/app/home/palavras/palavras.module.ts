import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalavrasPageRoutingModule } from './palavras-routing.module';

import { PalavrasPage } from './palavras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalavrasPageRoutingModule
  ],
  declarations: [PalavrasPage]
})
export class PalavrasPageModule {}
