import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
videoId:number;
video;
  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  ngOnInit() {
    this.videoId=this.router.snapshot.params['videoId'];
    this.http.get('/api/videodetail/'+this.videoId).subscribe((data)=>{
      this.video=data;
      console.log(data);
    })
  }

}
