import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-finshed',
  templateUrl: './finshed.component.html',
  styleUrls: ['./finshed.component.css']
})
export class FinshedComponent implements OnInit {

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
