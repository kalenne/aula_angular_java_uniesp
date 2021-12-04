import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/conta-saque';
import { ContaServiceService } from 'src/app/services/conta-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  formGroup: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private contaservice: ContaServiceService, private route: Router){
    this.formGroup = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      numeroConta: this.fb.control('', Validators.required),
      valor: this.fb.control('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  enviarDados(){
    this.loading = true;
    const deposito = this.formGroup.value;
    const request: ISaqueDeposito = {
      agencia: deposito.agencia,
      numeroConta: deposito.numeroConta,
      valor: deposito.valor
    }
    this.contaservice.deposito(request).subscribe(valor=>{
      this.loading = false;
      Swal.fire('Feito', 'Depósito realizado com sucesso!', 'success');
      this.route.navigate(['/conta']);
    })
  }

}
