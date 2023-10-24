import { Component, inject, OnInit } from '@angular/core';
import { OpenTablesApiService } from '../@api/open-tables-api.service';

interface OpenTable {
  name: string;
  capacity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



}
