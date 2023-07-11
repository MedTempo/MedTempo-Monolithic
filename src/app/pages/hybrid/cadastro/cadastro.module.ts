import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    NgFor,
    NgIf,
    FormsModule,
    IonicModule
  ]
})
export class CadastroModule { }
