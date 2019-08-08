import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
resData;
newsData;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    const url="";
    this.http.get(url).subscribe(res=>{
      this.resData=res;
      this.newsData=this.resData.articles;
      console.log(this.newsData);
    })
  }

}
