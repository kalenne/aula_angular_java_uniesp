import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { ISaqueDeposito } from '../interfaces/conta-saque';
import { IContaTransferencia } from '../interfaces/conta-transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContaServiceService {

  api = `${environment.api}/contas/`;

  constructor(private http: HttpClient) { }

  listarasContas() {
    return this.http.get<IConta[]>(this.api);
  }

  // Chamada do serviço de saque (post) utilizando o parâmetro do tipo ISaqueDeposito.
  saque(saque: ISaqueDeposito){
    return this.http.post(`${this.api}/saque`, saque);
  }

  deposito (deposito: ISaqueDeposito){
    return this.http.post(`${this.api}/deposito`, deposito);
  }

  transferencia (transferencia: any){
    return this.http.post(`${this.api}transferencia`, transferencia);
  }

  cadastrar (cadastro: IConta) {
    return this.http.post(`${this.api}`, cadastro);
  }
}
