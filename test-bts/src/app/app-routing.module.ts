import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { isAuth } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // canActivate: [isAuth]

  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'regist',
    loadChildren: () => import('./pages/regist/regist.module').then( m => m.RegistPageModule)
  },
  {
    path: 'new-checklist',
    loadChildren: () => import('./pages/new-checklist/new-checklist.module').then( m => m.NewChecklistPageModule)
  },
  {
    path: 'new-checklist-item',
    loadChildren: () => import('./pages/new-checklist-item/new-checklist-item.module').then( m => m.NewChecklistItemPageModule)
  },
  {
    path: 'detail-check-item',
    loadChildren: () => import('./pages/detail-check-item/detail-check-item.module').then( m => m.DetailCheckItemPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
