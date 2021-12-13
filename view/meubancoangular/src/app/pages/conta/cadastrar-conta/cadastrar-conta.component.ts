import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IConta } from 'src/app/interfaces/conta';
import { ClienteService } from 'src/app/services/cliente.service';
import { ContaServiceService } from 'src/app/services/conta-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.css']
})
export class CadastrarContaComponent implements OnInit {

  loading = false;
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contaservice: ContaServiceService,
    private router: Router,
    private clienteService: ClienteService) {
    this.formGroup = this.fb.group({
      agencia: this.fb.control(''),
      numero: this.fb.control(''),
      saldo: this.fb.control(''),
      cliente: this.fb.group({
        id: this.fb.control(''),
        cpf: this.fb.control(''),
        nome: this.fb.control({value: '', disabled: true}),
      })
    })
   }

  ngOnInit(): void {
  }

  enviarDados(){
    this.loading = true;
    const formGroup =  this.formGroup.value;

    // cópia do objeto que pode ser alterado, já que o saldo estava sendo enviado como string.
    const request: IConta = {
      ...formGroup,
      saldo: Number(formGroup.saldo)
    }

    this.contaservice.cadastrar(request).subscribe(valor => {
      this.loading = false;
      Swal.fire('Feito', 'Conta criada com sucesso!', 'success');
      this.router.navigate(['/conta'])
    })
  }

  buscarCpf (cpf: string) {

    this.clienteService.buscarcpf(cpf).subscribe((valor)  =>{
      this.formGroup.controls.cliente.get('id')!.patchValue(valor.id)
      this.formGroup.controls.cliente.get('nome')!.patchValue(valor.nome);
    });
  }

}
