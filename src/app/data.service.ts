import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl: string = 'http://localhost:8080/automain/jaxrs';

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get(this.baseUrl + '/Car');
  }

  getCar(carId) {
    return this.http.get(this.baseUrl + '/Car/' + carId);
  }

  getMaintenanceTasks() {
    return this.http.get(this.baseUrl + '/MaintenanceTasks');
  }
}
