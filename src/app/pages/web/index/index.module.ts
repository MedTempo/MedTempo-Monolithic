import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HttpClientModule,
    NgFor,
    NgIf
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
