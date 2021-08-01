import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   products:any;
  constructor(private http:HttpClient, private _router:Router) { }

  ngOnInit()  {
   let response= this.http.get("http://localhost:8085/products/all");
   response.subscribe((data)=>this.products=data);
    
  }
    addtocart(){
      this._router.navigate(['cart']);
    }

}
