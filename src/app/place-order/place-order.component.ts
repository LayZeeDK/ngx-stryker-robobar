import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DrinkService } from '../data-access/drink.service';
import { OrderService } from '../data-access/order.service';
import { Drink } from '../domain/drink';

@Component({
  selector: 'robo-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent implements OnInit {
  drinks: readonly Drink[] = [];

  get isSubmitEnabled(): boolean {
    return this.drinks.some(drink => drink.amount > 0);
  }

  get totalPrice(): number {
    return this.drinks.reduce(
      (total, drink) => total + drink.amount * drink.price,
      0,
    );
  }

  constructor(
    private orderService: OrderService,
    private drinkService: DrinkService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.drinks = this.drinkService.getDrinks();
  }

  onDecrement(drink: Drink): void {
    drink.amount -= 1;

    if (drink.amount < 0) {
      drink.amount = 0;
    }
  }

  onIncrement(drink: Drink): void {
    drink.amount += 1;
  }

  async onSubmit(): Promise<void> {
    this.orderService.currentOrder = this.drinks.filter(drink => drink.amount);
    await this.router.navigateByUrl('/review');
  }
}
