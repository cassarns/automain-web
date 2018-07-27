import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarsComponent } from './cars/cars.component';
import { DetailsComponent } from './details/details.component';
import { MaintenanceTasksComponent } from './maintenance-tasks/maintenance-tasks.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CreateCarComponent } from './create-car/create-car.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarsComponent,
    DetailsComponent,
    MaintenanceTasksComponent,
    HomeComponent,
    CreateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
