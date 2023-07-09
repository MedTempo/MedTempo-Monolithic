import { isDevMode, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isPlatform } from '@ionic/angular';
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


const routes: Routes = [
  {
    path: ``,
    loadChildren: async function () {

      let plataform: boolean = isPlatform(`mobile`)

      console.log(`is mobile ${plataform}`)

      if (plataform === true || isDevMode()){
        let { TabsModule } = await import('./pages/hybrid/tabs/tabs.module');

        console.log(TabsModule);
  
        return TabsModule;
      }
      else{
        let { IndexModule } = await import('./pages/web/index/index.module');

        console.log(IndexModule);
  
        return IndexModule;
      }


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
  },
  { path: 'web', loadChildren: () => import('./pages/web/index/index.module').then(m => m.IndexModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
