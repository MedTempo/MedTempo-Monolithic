import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

import { TabsModule } from 'src/app/pages/hybrid/tabs/tabs.module';
import { IonicModule } from '@ionic/angular';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    TabsModule,
    IonicModule,
    NavbarModule
  ]
})
export class CalendarModule { }
