import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: ``,
        redirectTo: `home`,
        pathMatch: 'full',
      },
      {
        path: `home`,
        loadChildren: async function () {
          let { HomeModule } = await import(
            '../../../components/home/home.module'
          );

          console.log(HomeModule);

          return HomeModule;
        },
      },
      {
        path: `calendar`,
        loadChildren: async function () {
          let { CalendarModule } = await import(
            '../../../components/calendar/calendar.module'
          );

          console.log(CalendarModule);

          return CalendarModule;
        },
      },
      {
        path: `chat`,
        loadChildren: async function () {
          let { ChatModule } = await import(
            '../../../components/chat/chat.module'
          );

          console.log(ChatModule);

          return ChatModule;
        },
        
      },
      {
        path: `perfil`,
        loadChildren: async function () {
          let { PerfilModule } = await import(
            '../../../components/perfil/perfil.module'
          );

          console.log(PerfilModule);

          return PerfilModule;
        },
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
