import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  txtCityName = '';
  cityName = '';
  temp = '';
  constructor(private weatherservice : WeatherService) { }

  // ngOnInit() {
  //   this.weatherservice.getTemp('Tokyo')
  //     .then(temp => console.log(temp))
  //     .catch(err => console.log(err));
  // }

  ngOnInit() {}
  getWeather() {
    this.weatherservice.getTemp(this.txtCityName)
    .then(temp=> {
      this.cityName = this.txtCityName;
      this.temp = temp;
    })
    .then(err=>console.log(err))
  }
}
