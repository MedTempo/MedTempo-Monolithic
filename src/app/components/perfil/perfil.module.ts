import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { NavbarModule } from '../navbar/navbar.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    NavbarModule,
    IonicModule,
  ],
  exports: [
    PerfilComponent
  ]
})
export class PerfilModule { }
