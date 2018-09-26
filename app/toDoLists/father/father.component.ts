import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor(private local:CommonService) { }
  data:string[]=[];
  data1:string[]=[];
  change(val){
    this.data.push(val);
    this.local.set("list3",this.data);
  }
  del(i){
    this.data.splice(i,1); 
    this.local.set("list3",this.data);
    //this.local.set("list4",this.data1);
  }
  del1(idx){
    this.data1.splice(idx,1);
   this.local.set("list4",this.data1);
   //this.local.set("list3",this.data);
  }
   fun1(idx){
       this.data1.unshift(this.data[idx]);
       this.data.splice(idx,1);
       this.local.set("list3",this.data);
       this.local.set("list4",this.data1);
   }
   fun2(idx){
    this.data.unshift(this.data1[idx]);
    this.data1.splice(idx,1);
    this.local.set("list3",this.data);
    this.local.set("list4",this.data1);}
  ngOnInit() {
    if(this.local.get("list3")){
      this.data=this.local.get("list3").split(",");
    }
    if(this.local.get("list4")){
      this.data1=this.local.get("list4").split(",");
    }
  }
  }
