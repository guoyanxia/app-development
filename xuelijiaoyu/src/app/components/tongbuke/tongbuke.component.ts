import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-tongbuke',
  templateUrl: './tongbuke.component.html',
  styleUrls: ['./tongbuke.component.css']
})
export class TongbukeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  courses1;
  ngOnInit() {
    this.http.get('/api/courses1').subscribe(data=>{
      this.courses1=data;
    })

  }

}
