import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-kanguo',
  templateUrl: './kanguo.component.html',
  styleUrls: ['./kanguo.component.css']
})
export class KanguoComponent implements OnInit {

  studying;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/studying',).subscribe((data)=>{
      this.studying=data;
     });
  }

}
