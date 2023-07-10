import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleTabComponent } from './single-tab.component';
import { SingleTabRoutingModule } from './single-tab-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SingleTabComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SingleTabRoutingModule,
  ],
  exports:[
    SingleTabComponent
  ]
})
export class SingleTabModule { }
  