import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/conta-saque';
import { ContaServiceService } from 'src/app/services/conta-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  formGroup: FormGroup;
  statusCheckbox: boolean = false;
  loading = false;

  constructor(private contasService: ContaServiceService, private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      agencia: this.fb.control('', Validators.required),
      numeroConta: this.fb.control('', Validators.required),
      valor: this.fb.control('')
    })
   }

  ngOnInit(): void {
  }

  checkboxMarcado(event:any){
    this.statusCheckbox = event;
  }

  enviarDados() {
    this.loading = true;
    const formGroup = this.formGroup.value;
    const request: ISaqueDeposito = {
      agencia: formGroup.agencia,
      numeroConta: formGroup.numeroConta,
      valor: formGroup.valor
    }

    this.contasService.saque(request).subscribe(valor => {
      this.loading = false;
      Swal.fire('Feito', 'Saque realizado com sucesso!', 'success');
      this.router.navigate(['/conta']);
    })
  }

}
