import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PlaceOrderComponent } from './place-order.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PlaceOrderComponent,
  },
];

@NgModule({
  declarations: [PlaceOrderComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
})
export class PlaceOrderModule {}
