import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { StorageTestingModule } from '../data-access/testing/storage-testing.module';
import { Drink } from '../domain/drink';
import { TestTargetComponent } from '../testing/test-target.component';
import { PlaceOrderComponent } from './place-order.component';
import { PlaceOrderModule } from './place-order.module';

describe('PlaceOrderComponent', () => {
  let component: PlaceOrderComponent;
  let fixture: ComponentFixture<PlaceOrderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestTargetComponent],
      imports: [RouterTestingModule, StorageTestingModule, PlaceOrderModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderComponent);
    router = fixture.debugElement.injector.get(Router);
    spyOn(router, 'navigateByUrl');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have 3 drinks', () => {
    expect(component.drinks.length).toBe(3);
  });

  it('should increment the drink amount on increment', () => {
    const roboBeer: Partial<Drink> = { name: 'Robo Beer', amount: 0 };

    component.onIncrement(roboBeer as Drink);

    expect(roboBeer.amount).toEqual(1);
  });

  it('should decrement the drink amount on decrement', () => {
    const roboBeer: Partial<Drink> = { name: 'Robo Beer', amount: 5 };

    component.onDecrement(roboBeer as Drink);

    expect(roboBeer.amount).toEqual(4);
  });

  it('should not go below 0 on decrement', () => {
    const roboBeer: Partial<Drink> = { name: 'Robo Beer', amount: 0 };

    component.onDecrement(roboBeer as Drink);

    expect(roboBeer.amount).toEqual(0);
  });

  it('should calculate the total price', () => {
    component.drinks = [
      { ...component.drinks[0], amount: 2, price: 2 },
      { ...component.drinks[1], amount: 3, price: 2.8 },
      ...component.drinks.slice(2),
    ];

    expect(component.totalPrice).toEqual(2 * 2 + 3 * 2.8);
  });

  it('should not disable submit button if there are no drinks selected yet', () => {
    expect(component.isSubmitEnabled).toBeFalse();
  });

  it('should navigate to next page on submit', fakeAsync(() => {
    component.onSubmit();
    tick();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/review');
  }));
});
