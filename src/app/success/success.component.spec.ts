import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StorageTestingModule } from '../data-access/testing/storage-testing.module';
import { SuccessComponent } from './success.component';
import { SuccessModule } from './success.module';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StorageTestingModule, SuccessModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be constructed', () => {
    expect(component).toBeTruthy();
  });
});
