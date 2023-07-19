import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';

import { IsNotMobileService } from './services/router_guards/isPlataform/is-plataform.service';

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
      let { IndexModule } = await import('./pages/web/index/index.module');

      console.log(IndexModule);

      return IndexModule;
    },
    canActivate: [IsNotMobileService],
  },
  {
    path: `app`,
    loadChildren: async function () {
      let { TabsModule } = await import('./pages/hybrid/tabs/tabs.module');

      console.log(TabsModule);

      return TabsModule;
    },
  },
  {
    path: 'cadastro',
    loadChildren: async function () {
      let { CadastroModule } = await import(
        './pages/hybrid/cadastro/cadastro.module'
      );

      console.log(CadastroModule);

      return CadastroModule;
    },
    pathMatch: `full`,
  },
  {
    path: 'login',
    loadChildren: async function () {
      let { LoginModule } = await import(
        './pages/hybrid/login/login.module'
      );

      console.log(LoginModule);

      return LoginModule;
    },
    pathMatch: `full`,
  },
  {
    path: `**`,
    loadChildren: async function () {
      let { NotFoundModule } = await import(
        './pages/web/not-found/not-found.module'
      );

      console.log(NotFoundModule);

      return NotFoundModule;
    },
    pathMatch: `prefix`,
  },

  //{ path: 'web', loadChildren: () => import('./pages/web/index/index.module').then(m => m.IndexModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
