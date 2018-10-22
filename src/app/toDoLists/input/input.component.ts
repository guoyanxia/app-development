import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() {}
  txt:string;
  @Output() textOut=new EventEmitter();
  word(e){   
    if(e.keyCode==13){
      this.textOut.emit(this.txt);
      this.txt="";
    }     
  }
  ngOnInit() { }

}

