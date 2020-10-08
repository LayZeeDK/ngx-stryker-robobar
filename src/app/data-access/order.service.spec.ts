import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(OrderService);
  });

  it('should retrieve given order', () => {
    // @ts-expect-error
    service.currentOrder = 'foobar';

    expect(service.currentOrder).toBe('foobar');
  });

  it('should retrieve from localStorage if local copy does not exist', () => {
    // @ts-expect-error
    service.currentOrder = 'foobar';
    service._currentOrder = null;

    expect(service.currentOrder).toBe('foobar');
  });
});
