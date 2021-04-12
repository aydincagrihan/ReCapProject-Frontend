import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1: any = {
    carId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 1880,
    dailyPrice: 123,
    carName: 'TOROS',
  };
  car2: any = {
    carId: 2,
    brandId: 2,
    colorId: 2,
    modelYear: 1881,
    dailyPrice: 555,
    carName: 'MEGAN',
  };
  car3: any = {
    carId: 3,
    brandId: 3,
    colorId: 3,
    modelYear: 1882,
    dailyPrice: 666623,
    carName: 'GOLF',
  };
  car4: any = {
    carId: 4,
    brandId: 4,
    colorId: 4,
    modelYear: 1883,
    dailyPrice: 777323,
    carName: 'HAYABUSA',
  };
  car5: any = {
    carId: 5,
    brandId: 5,
    colorId: 5,
    modelYear: 1885,
    dailyPrice: 14124123,
    carName: 'ŞAHİN',
  };

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5];
  constructor() { }

  ngOnInit(): void {
  }

}
