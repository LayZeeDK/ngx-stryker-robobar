import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ReviewOrderComponent } from './review-order.component';

const routes: Routes = [{ path: '', component: ReviewOrderComponent }];

@NgModule({
  declarations: [ReviewOrderComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
})
export class ReviewOrderModule {}
