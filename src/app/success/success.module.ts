import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuccessComponent } from './success.component';

const routes: Routes = [{ path: '', component: SuccessComponent }];

@NgModule({
  declarations: [SuccessComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class SuccessModule {}
