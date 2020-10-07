import { Injectable } from '@angular/core';

import { Drink } from '../domain/drink';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  getDrinks(): readonly Drink[] {
    return [
      { name: 'Roba Cola', price: 1.25, amount: 0, isAlcoholic: false },
      { name: 'Robo Beer', price: 2.0, amount: 0, isAlcoholic: true },
      { name: 'Rob(w)ine', price: 3.0, amount: 0, isAlcoholic: true },
    ];
  }
}
