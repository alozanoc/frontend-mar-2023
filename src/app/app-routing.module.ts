import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/landing/landing.module').then((m) => m.LandingModule) },
  { path: '', loadChildren: () => import('./intranet/intranet.module').then((m) => m.IntranetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
