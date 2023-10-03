import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment';


export interface OpenTable {
  name: string
  capacity: number
}

export interface SaveTableResponse {
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class OpenTablesApiService {
  httpClient = inject(HttpClient)

  getListOpenTables() {
    return lastValueFrom(this.httpClient.get<OpenTable[]>(`${environment.host}/open-tables/`));
  }

  async saveOpenTable(openTable: OpenTable) {
    return lastValueFrom(this.httpClient.post<SaveTableResponse>(`${environment.host}/open-tables/`, openTable));
  }
}
