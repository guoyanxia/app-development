import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  video;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/video',).subscribe((data)=>{
      this.video=data;
     });
  }

}
