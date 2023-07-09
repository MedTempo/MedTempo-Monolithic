import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTabComponent } from './single-tab.component';

const routes: Routes = [{ path: '', component: SingleTabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleTabRoutingModule { }
