import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IConta } from 'src/app/interfaces/conta';
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

  constructor(private fb: FormBuilder, private contaservice: ContaServiceService, private router: Router) {
    this.formGroup = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      numero: this.fb.control('', Validators.required),
      saldo: this.fb.control('', Validators.required),
      cliente: this.fb.group({
        nome: this.fb.control('', Validators.required),
        email: this.fb.control('', Validators.required),
        cpf: this.fb.control('', Validators.required),
        observacoes: this.fb.control(''),
        ativo: this.fb.control('')
      })
    })
   }

  ngOnInit(): void {
  }

  enviarDados(){
    this.loading = true;
    const formGroup =  this.formGroup.value;
    const request: IConta = this.formGroup.value as IConta;

    this.contaservice.cadastrar(request).subscribe(valor => {
      this.loading = false;
      Swal.fire('Feito', 'Transferência realizado com sucesso!', 'success');
      this.router.navigate(['/conta'])
    })
  }

}
