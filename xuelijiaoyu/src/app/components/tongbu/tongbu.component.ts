import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('/api/courses').subscribe(data=>{
      this.courses=data;
    })
  }
    //this.courseId=this.router.snapshot.params['courseId'];//后面的courseId是app.moudle.ts中传入的参数，第一种在路径中传参数的方式,参数快照方式，这句话只执行一次，参数不会再被更改
   // this.router.params.subscribe((params)=>{
     // this.courseId=params["courseId"];//只要this.router.params中的属性值一变，就可以检测到，courseId的值就会改变
    //});//参数订阅方式，虽然这句话就执行一次，但是只要一变化，里边的赋值语句就会执行一次，这就是和上面语句的区别，
  
  /* go(){
    this.route.navigate(['/shequ'], {queryParams:{i:1000}});
  } */

}
