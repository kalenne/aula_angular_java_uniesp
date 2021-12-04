import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Helper } from 'src/shared/helpers/helper';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: ICliente[] = [];
  helper = new Helper();

  constructor(
    private clientService: ClienteService
  ) { }

  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes() {
    this.clientService.listarTodosCliente().subscribe(clienteApi => {
      this.cliente = clienteApi;
    } )
  }
}
