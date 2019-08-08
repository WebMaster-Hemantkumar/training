import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-our-app',
  templateUrl: './our-app.component.html',
  styleUrls: ['./our-app.component.css']
})
export class OurAppComponent implements OnInit {
resData;
newsData;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    const url ="https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-28&sortBy=publishedAt&apiKey=8e5e1ef63eaf463585b87a05fa5da1f6";

    this.http.get(url).subscribe(res=>{
this.resData=res;
this.newsData=this.resData.articles;
  console.log(this.newsData);
})
  }

}
