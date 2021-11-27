import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  statusCheckbox: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkboxMarcado(event:any){
    this.statusCheckbox = event;
  }

}
