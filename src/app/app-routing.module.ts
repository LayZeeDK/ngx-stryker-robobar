import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./place-order/place-order.module').then(
        esModule => esModule.PlaceOrderModule,
      ),
  },
  {
    path: 'review',
    loadChildren: () =>
      import('./review-order/review-order.module').then(
        esModule => esModule.ReviewOrderModule,
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
