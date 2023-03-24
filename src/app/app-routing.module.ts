import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookingComponent } from './component/flight-booking/flight-booking.component';
import { HomeComponent } from './component/home/home.component';
import { ViewDetailComponent } from './component/view-detail/view-detail.component';

const routes: Routes = [
  {
    path: 'booking',
    component: FlightBookingComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'viewDetail',
    component: ViewDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
