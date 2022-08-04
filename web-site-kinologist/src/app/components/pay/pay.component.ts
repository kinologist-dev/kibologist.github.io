import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private router: Router){
    
  }

  ngOnInit(): void {
    render(
      
      {
        id: "#paypalButtons",
        currency: "USD",
        value: "100.00",
        onApprove: (details) => {
          window.open('https://t.me/+mJ7S2F8XpbUxZWYy', "_parent")
        }
      }
    );
  }

  goToCoursePage = () => {
    this.router.navigate(['/']);
  }

}
