import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   products:any;
  constructor(private http:HttpClient) { }

  ngOnInit()  {
   let response= this.http.get("http://localhost:8083/products/all");
   response.subscribe((data)=>this.products=data);
    
  }

}
