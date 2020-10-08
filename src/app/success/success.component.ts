import { Component, OnInit } from '@angular/core';

import { OrderService } from '../data-access/order.service';

@Component({
  selector: 'robo-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  numberOfDrinks = 0;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.numberOfDrinks = (this.orderService.currentOrder ?? []).reduce(
      (numberOfDrinks, drink) => numberOfDrinks + drink.amount,
      0,
    );
  }
}
