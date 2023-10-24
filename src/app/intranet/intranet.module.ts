import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntranetComponent } from './intranet.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterOutlet } from '@angular/router';
import { IntranetRoutingModule } from './intranet-routing.module';
import { OpenTablesComponent } from './open-tables/open-tables.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    DashboardComponent,
    IntranetComponent,
    OpenTablesComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterOutlet,
    IntranetRoutingModule,
    FormsModule,
    MatSidenavModule
  ]
})
export class IntranetModule { }
