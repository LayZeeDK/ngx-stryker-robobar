import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryStorage implements Storage {
  // tslint:disable-next-line: no-any
  [name: string]: any;

  #storage = new Map<string, string>();

  get length(): number {
    return this.#storage.size;
  }

  clear(): void {
    this.#storage.clear();
  }

  getItem(key: string): string | null {
    return this.#storage.get(key) ?? null;
  }

  key(index: number): string | null {
    return Array.from(this.#storage.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    this.#storage.delete(key);
  }

  setItem(key: string, value: string): void {
    this.#storage.set(key, value);
  }
}
