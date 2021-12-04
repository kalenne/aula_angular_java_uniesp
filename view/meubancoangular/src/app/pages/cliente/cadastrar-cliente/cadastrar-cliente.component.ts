import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {


  formCliente: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) {
    this.formCliente = this.fb.group({
      nome: this.fb.control("", [Validators.required]),
      email: this.fb.control(""),
      cpf: this.fb.control("", [Validators.required]),
      descricao: this.fb.control(""),
      checkbox: this.fb.control(false)
    })
  }

  ngOnInit(): void {
    // this.atualizarDados();
  }

  salvarDados() {
    const alerta = this.formCliente.value;
    const request: ICliente =  {
      nome: alerta.nome,
      email: alerta.email,
      cpf: alerta.cpf,
      observacoes: alerta.descricao,
      ativo: alerta.checkbox
    }
    this.clienteService.cadastrarCliente(request).subscribe(clienteCadastrado => {
      console.log(clienteCadastrado);
    })
    // alert(`Meu nome é ${alerta.nome}\n Meu e-mail é ${alerta.email}\n Meu cpf é ${alerta.cpf} \n A observação é ${alerta.descricao}\n E os termos estão: ${alerta.checkbox}`);
  }



}
