import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';

/*
const routes: Routes = [
  {
    path: ``,
    loadChildren: async function () {
      let { HomeModule } = await import('./pages/hybrid/home/home.module');

      console.log(HomeModule);

      return HomeModule;
    },
  },
  {
    path: `home`,
    redirectTo: ``,
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    loadChildren: async function () {
      let { CalendarModule } = await import('./pages/hybrid/calendar/calendar.module');

      console.log(CalendarModule);

      return CalendarModule;
    },
  },
  {
    path: `**`,
    loadChildren:
    async function () {
      let { NotFoundModule } = await import('./pages/web/not-found/not-found.module');

      console.log(NotFoundModule);

      return NotFoundModule;
    },
    pathMatch: `prefix`
  }
];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
