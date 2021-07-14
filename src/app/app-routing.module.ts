import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     // path: '',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
    // redirectTo: 'folder/Inbox',
    // pathMatch: 'full'
  },
  {
    path: 'folder/:id', 
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
 
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./pages/custmer/donation/donation.module').then( m => m.DonationPageModule)
  },
  // {
  //   path: 'admine',
  //   loadChildren: () => import('./pages/admine/admine.module').then( m => m.AdminPageModule)
  // },
  {
    path: 'admins',
    loadChildren: () => import('./pages/admins/admin.module').then( m => m.AdminsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'info-connect',
    loadChildren: () => import('./pages/custmer/info-connect/info-connect.module').then( m => m.InfoConnectPageModule)
  },
  
 
  {
    path: 'select-location',
    loadChildren: () => import('./pages/custmer/select-location/select-location.module').then( m => m.SelectLocationPageModule)
  },
  // {
  //   path: 'custmer',
  //   loadChildren: () => import('./pages/custmer/custmer.module').then( m => m.CustmerPageModule)
  // },
  {
    path: 'rest',
    loadChildren: () => import('./pages/custmer/rest/rest.module').then( m => m.RestPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./pages/home/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'driver',
    loadChildren: () => import('./pages/driver/driver.module').then( m => m.DriverPageModule)
  },
  // {
  //   path: 'new',
  //   loadChildren: () => import('./pages/home/new/new.module').then( m => m.NewPageModule)
  // },
  // {
  //   path: 'requests',
  //   loadChildren: () => import('./pages/requests/requests.module').then( m => m.RequestsPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
