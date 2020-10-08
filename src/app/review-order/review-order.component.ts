import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../data-access/order.service';
import { Customer } from '../domain/customer';
import { Drink } from '../domain/drink';

@Component({
  selector: 'robo-review-order',
  styleUrls: ['./review-order.component.css'],
  templateUrl: './review-order.component.html',
})
export class ReviewOrderComponent implements OnInit {
  age?: number;
  error: string | null = null;
  shouldCheckAge = false;
  numberOfDrinks = 0;
  order: readonly Drink[] = [];

  constructor(private orderService: OrderService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    if (!this.orderService.currentOrder) {
      await this.router.navigateByUrl('/');
    }

    this.order = this.orderService.currentOrder ?? [];
    this.numberOfDrinks = this.order.reduce(
      (numberOfDrinks, drink) => numberOfDrinks + drink.amount,
      0,
    );
    this.shouldCheckAge = this.order.some(drink => drink.isAlcoholic);
  }

  async onSubmit(): Promise<void> {
    if (
      !this.shouldCheckAge ||
      this.isAllowedToBuyAlcohol({ age: this.age ?? 0 })
    ) {
      this.error = null;
      await this.router.navigateByUrl('/success');
    } else {
      this.error = 'Only adults can buy alcohol!';
    }
  }

  async onCancel(): Promise<void> {
    this.orderService.clear();
    await this.router.navigateByUrl('/');
  }

  private isAllowedToBuyAlcohol(customer: Customer): boolean {
    return customer.age > 18;
  }
}
