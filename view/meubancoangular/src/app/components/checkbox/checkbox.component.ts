import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input()
  label: string = '';

  @Output()
  checkboxEventEmitter = new EventEmitter();

  isMarcado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkIsMarcado(event: any) {
    if(event.target.checked){
      this.isMarcado = true;
      this.emissorEvento();
    } else {
      this.isMarcado = false;
      this.emissorEvento();
    }
  }

  emissorEvento() {
    this.checkboxEventEmitter.emit(this.isMarcado);
  }
}
