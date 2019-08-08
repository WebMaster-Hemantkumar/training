import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-pricing-options',
  templateUrl: './pricing-options.component.html',
  styleUrls: ['./pricing-options.component.css']
})
export class PricingOptionsComponent implements OnInit {
  //step5
 resData;
 newsdata;
  constructor( private http:HttpClient) { }
  ngOnInit() {
    const url="https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-27&sortBy=publishedAt&apiKey=8e5e1ef63eaf463585b87a05fa5da1f6";
   this.http.get(url).subscribe(res=>{
     this.resData=res;
     this.newsdata=this.resData.articles;
    console.log(this.newsdata);
   })
}

}
