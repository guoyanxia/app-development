import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private http: HttpClient) { }
  course;
  headers=new HttpHeaders({});
  ngOnInit(){
    //this.http.get('/api/courses').subscribe((data)=>{ //subscribe前面是被观察对象,get返回来的是一个可观察的对象，返回promise的时候用then,返回可观察对象，就用subscribe观察
      //console.log(data);
      //this.course=data; 
  //});//查询，获取信息
  this.http.post('/api',/* {name:'guoyanxia',pwd:123}, */{headers:this.headers}).subscribe((data)=>{
    //this.course=data;
    console.log(data);
   });//提交的信息是第二项参数，例如注册，修改信息，提交信息,第三个参数为请求头
}
  //ngOnDestroy(){}
  /* timer=null;
  ngOnInit() {
    this.timer=setInterval(function(){
      //console.log(11);
    },1000)
  }
  ngOnDestroy(){
    clearInterval(this.timer);//当跳转到其他组件时，关闭上面的定时器
  } */
}
