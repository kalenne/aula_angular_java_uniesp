import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api = `${environment.api}/clientes/`;
  constructor(
    private http: HttpClient,
  ) { }

  listarTodosCliente() {
    return this.http.get<ICliente[]>(this.api);
  }

  cadastrarCliente(request: ICliente) {
    return this.http.post(this.api, request);
  }
}
