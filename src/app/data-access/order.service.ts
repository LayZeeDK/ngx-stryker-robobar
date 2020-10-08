import { Inject, Injectable } from '@angular/core';

import { Drink } from '../domain/drink';
import { storageToken } from './storage.token';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // tslint:disable-next-line: variable-name
  _currentOrder: readonly Drink[] | null = null;

  get currentOrder(): readonly Drink[] | null {
    if (!this._currentOrder && this.storage.getItem('currentOrder')) {
      this._currentOrder =
        JSON.parse(this.storage.getItem('currentOrder') ?? '') ?? null;
    }

    return this._currentOrder;
  }

  set currentOrder(value: readonly Drink[] | null) {
    this._currentOrder = value;
    this.storage.setItem('currentOrder', JSON.stringify(value));
  }

  constructor(@Inject(storageToken) private storage: Storage) {}

  clear(): void {
    this.currentOrder = null;
  }
}
