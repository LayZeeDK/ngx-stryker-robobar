import { InjectionToken } from '@angular/core';

export const storageToken = new InjectionToken('Storage', {
  factory: (): Storage => localStorage,
  providedIn: 'root',
});
