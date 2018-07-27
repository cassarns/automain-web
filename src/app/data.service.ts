import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './models/car';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl: string = 'http://localhost:8080/automain/jaxrs';

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get(this.baseUrl + '/Car');
  }

  createCar(car: Car) {
    return this.http.post(this.baseUrl + '/Car', car);
  }

  getCar(carId) {
    return this.http.get(this.baseUrl + '/Car/' + carId);
  }

  getMaintenanceTasks() {
    return this.http.get(this.baseUrl + '/MaintenanceTask');
  }
}
