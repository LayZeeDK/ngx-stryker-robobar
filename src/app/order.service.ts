import { Inject, Injectable } from '@angular/core';

import { storageToken } from './storage.token';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  #currentOrder: readonly Drink[] | null = null;

  get currentOrder(): readonly Drink[] | null {
    if (!this.#currentOrder && this.storage.getItem('currentOrder')) {
      this.#currentOrder =
        JSON.parse(this.storage.getItem('currentOrder') ?? '') ?? null;
    }

    return this.#currentOrder ?? [];
  }

  set currentOrder(value: readonly Drink[] | null) {
    this.#currentOrder = value;
    this.storage.setItem('currentOrder', JSON.stringify(value));
  }

  constructor(@Inject(storageToken) private storage: Storage) {}

  clear(): void {
    this.currentOrder = null;
  }
}
