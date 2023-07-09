import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { SingleTabModule } from '../../../components/single-tab/single-tab.module';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
    SingleTabModule
  ],
  exports:[
    TabsComponent
  ]
})
export class TabsModule { }
