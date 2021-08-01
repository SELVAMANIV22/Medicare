import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  message:any;

  constructor(private http:HttpClient ,private _router:Router) { }

  ngOnInit(): void {
  }
  order(){
      this._router.navigate(['orders']);
  };

}
