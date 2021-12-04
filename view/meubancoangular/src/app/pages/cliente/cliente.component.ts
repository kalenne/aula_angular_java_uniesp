import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Helper } from 'src/shared/helpers/helper';
import Swal from 'sweetalert2';

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

  confirmar(id: number){
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: "É algo irreversível.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, você deletou!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.remover(id).subscribe(result => {
          Swal.fire(
            'Removido!',
            'Seu cliente foi removido com sucesso.',
            'success'
          );
          this.listarTodosClientes();
        }, error=>{
          console.error(error);
        }
        )
      }
    })
  }
}
