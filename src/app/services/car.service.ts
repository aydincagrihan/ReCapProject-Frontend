import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //be bağlandığımız yer
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44336/api/cars/getall';
  constructor(private HttpClient: HttpClient) {}

  getCars():Observable<CarResponseModel> {
    return this.HttpClient.get<CarResponseModel>(this.apiUrl)
  }
}
