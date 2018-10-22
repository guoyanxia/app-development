import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-kecheng',
  templateUrl: './kecheng.component.html',
  styleUrls: ['./kecheng.component.css']
})
export class KechengComponent implements OnInit {
studying;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/studying',).subscribe((data)=>{
      this.studying=data;
     });
  }

}
