import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { DetailsComponent } from './details/details.component';
import { MaintenanceTasksComponent } from './maintenance-tasks/maintenance-tasks.component';
import { HomeComponent } from './home/home.component';
import { CreateCarComponent } from './create-car/create-car.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'details/:carId',
    component: DetailsComponent
  },
  {
    path: 'create',
    component: CreateCarComponent
  },
  {
    path: 'maintenancetasks',
    component: MaintenanceTasksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
