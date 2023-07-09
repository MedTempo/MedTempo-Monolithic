import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

import { NavbarModule } from '../navbar/navbar.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NavbarModule,
    IonicModule
  ],
  exports:[
    ChatComponent
  ]
})
export class ChatModule { }
