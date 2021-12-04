import { Component, OnInit } from '@angular/core';
import { IConta } from 'src/app/interfaces/conta';
import { ContaServiceService } from 'src/app/services/conta-service.service';
import { Helper } from 'src/shared/helpers/helper';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  contas: IConta[] = [];
  helper = new Helper();

  constructor(private contaService: ContaServiceService) { }

  ngOnInit(): void {
    this.listarContas();
  }

  listarContas(){
    this.contaService.listarasContas().subscribe(contasApi => {
      this.contas = contasApi;
    })
  }

}
