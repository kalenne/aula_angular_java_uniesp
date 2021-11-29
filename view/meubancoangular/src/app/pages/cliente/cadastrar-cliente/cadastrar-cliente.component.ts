import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  formCliente: FormGroup;

  constructor(
    private fb: FormBuilder,
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
    alert(`Meu nome é ${alerta.nome}\n Meu e-mail é ${alerta.email}\n Meu cpf é ${alerta.cpf} \n A observação é ${alerta.descricao}\n E os termos estão: ${alerta.checkbox}`);
  }
  // atualizarDados(){
  //   this.formCliente.controls.nome.patchValue("");
  // }
}
