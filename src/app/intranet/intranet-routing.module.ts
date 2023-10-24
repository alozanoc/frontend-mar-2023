import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntranetComponent } from './intranet.component';
import { OpenTablesComponent } from './open-tables/open-tables.component';

const routes: Routes = [
  {
    path: 'intranet', component: IntranetComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'open-tables', component: OpenTablesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule {
}
