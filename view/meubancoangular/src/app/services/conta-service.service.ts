import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';

@Injectable({
  providedIn: 'root'
})
export class ContaServiceService {

  api = `${environment.api}/contas/`;

  constructor(private http: HttpClient) { }

  listarasContas() {
    return this.http.get<IConta[]>(this.api);
  }
}
