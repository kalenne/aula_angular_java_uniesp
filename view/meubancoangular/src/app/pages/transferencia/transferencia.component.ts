import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContaTransferencia } from 'src/app/interfaces/conta-transferencia';
import { ContaServiceService } from 'src/app/services/conta-service.service';
import Swal from 'sweetalert2';
import { ContaComponent } from '../conta/conta.component';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  // Declaração de formulários
  formGroup: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private contaservice: ContaServiceService, private router: Router) {
    // Inicilização do formulário
    this.formGroup = this.fb.group({
      agenciaDestino: this.fb.control('', Validators.required),
      numeroContaDestino: this.fb.control('', Validators.required),
      agenciaOrigem: this.fb.control('', Validators.required),
      numeroContaOrigem: this.fb.control('', Validators.required),
      valor: this.fb.control('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  enviarDados(){
    this.loading = true;
    //como possuem o mesmo nome da dados, pode ser colocado dessa forma
    const request: IContaTransferencia = this.formGroup.value as IContaTransferencia
    this.contaservice.transferencia(request).subscribe(valor=>{
      this.loading = false;
      Swal.fire('Feito', 'Transferência realizado com sucesso!', 'success');
      this.router.navigate(['/conta']);
    }, (error) => {
      console.error;
    }
    )
  }
}
