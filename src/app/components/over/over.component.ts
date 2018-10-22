import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.css']
})
export class OverComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }

  finshed;
  ngOnInit() {
    // console.log(this.router.snapshot.queryParams["id"]);
    this.http.get('/api/finsheds').subscribe(data=>{
      this.finshed=data;
      console.log(this.finshed);
    })
  }

}
