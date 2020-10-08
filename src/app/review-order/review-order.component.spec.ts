import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { OrderService } from '../data-access/order.service';
import { StorageTestingModule } from '../data-access/testing/storage-testing.module';
import { ReviewOrderComponent } from './review-order.component';
import { ReviewOrderModule } from './review-order.module';

describe('ReviewOrderComponent', () => {
  let component: ReviewOrderComponent;
  let fixture: ComponentFixture<ReviewOrderComponent>;
  let orderServiceMock: jasmine.SpyObj<OrderService>;
  let router: Router;

  beforeEach(async () => {
    orderServiceMock = jasmine.createSpyObj(OrderService.name, ['clear']);
    orderServiceMock.currentOrder = [];

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StorageTestingModule, ReviewOrderModule],
      providers: [{ provide: OrderService, useValue: orderServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOrderComponent);
    router = fixture.debugElement.injector.get(Router);
    spyOn(router, 'navigateByUrl');
    component = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('should set order, numberOfDrinks and ageCheck properties', () => {
      orderServiceMock.currentOrder = [
        {
          name: 'Robo Beer',
          price: 2,
          amount: 2,
          isAlcoholic: true,
        },
        {
          name: 'Robo(w)ine',
          price: 3,
          amount: 1,
          isAlcoholic: true,
        },
      ];

      fixture.detectChanges();

      expect(component.order).toEqual(orderServiceMock.currentOrder);
    });

    it('should navigate back if there is no order', fakeAsync(() => {
      orderServiceMock.currentOrder = null;

      fixture.detectChanges();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/');
    }));
  });
});
