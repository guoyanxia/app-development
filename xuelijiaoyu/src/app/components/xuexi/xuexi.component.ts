import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-xuexi',
  templateUrl: './xuexi.component.html',
  styleUrls: ['./xuexi.component.css']
})
export class XuexiComponent implements OnInit {

  studying;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/studying',).subscribe((data)=>{
      this.studying=data;
     });
  }

}
