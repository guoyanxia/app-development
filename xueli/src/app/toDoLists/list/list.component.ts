import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() arr;
  @Input() arr1;
  @Output() delIndex=new EventEmitter();
  @Output() delIndex1=new EventEmitter();
  @Output() checkIndex=new EventEmitter();
  @Output() checkIndex1=new EventEmitter();
  del(i){
      this.delIndex.emit(i);
  } 
  del1(i){
    this.delIndex1.emit(i);
} 
  check(i){
    this.checkIndex.emit(i);
  }
  check1(i){
    this.checkIndex1.emit(i);
  }
  ngOnInit() {
     
  }
     
  

}
