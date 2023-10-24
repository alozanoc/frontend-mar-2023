import { Component, inject, OnInit } from '@angular/core';
import { OpenTable, OpenTablesApiService } from '../../../@api/open-tables-api.service';

@Component({
  selector: 'app-open-tables',
  templateUrl: './open-tables.component.html',
  styleUrls: ['./open-tables.component.scss']
})
export class OpenTablesComponent implements OnInit {
  openTables: OpenTable[] = []

  openTablesApiService = inject(OpenTablesApiService)

  message = ''

  openTable: OpenTable = {
    name: '',
    capacity: 0
  }

  async ngOnInit() {
    await this.loadData();
  }

  private async loadData() {
    this.openTables = await this.openTablesApiService.getListOpenTables();
  }

  async saveOpenTable() {
    console.log('Guardando mesa: ' + this.openTable.name)
    this.message = `Mesa "${this.openTable.name}" guardada`

    await this.openTablesApiService.saveOpenTable(this.openTable);
    await this.loadData();
    // clear form
    this.openTable = {
      name: '',
      capacity: 0
    }

    setTimeout(() => {
      this.message = '';
    }, 2000)
  }
}
