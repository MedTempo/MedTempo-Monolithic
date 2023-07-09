import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
  },
  {
    path: `calendar`,
    redirectTo: `/calendar`,
  },
  {
    path: `home`,
    redirectTo: `/home`,
  },
  {
    path: `chat`,
    redirectTo: `any`,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
