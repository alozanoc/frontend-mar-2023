import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/landing/landing.module').then((m) => m.LandingModule) },
  { path: '', loadChildren: () => import('./intranet/intranet.module').then((m) => m.IntranetModule) },
  { path: '', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
