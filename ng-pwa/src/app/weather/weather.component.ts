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
  isLoading = false;
  constructor(private weatherservice : WeatherService) { }

  // ngOnInit() {
  //   this.weatherservice.getTemp('Tokyo')
  //     .then(temp => console.log(temp))
  //     .catch(err => console.log(err));
  // }

  ngOnInit() {}
  getWeather() {
    this.isLoading = true;
    this.weatherservice.getTemp(this.txtCityName)
    .then(temp=> {
      this.cityName = this.txtCityName;
      this.temp = temp;
      // lấy xong
      this.isLoading = false;
    })
    .catch( err => {
      alert('Cannot find your city!');
      this.isLoading = false;
      this.cityName = '';
    })
  }
  // function show for user

  getMessage() {
    if(this.isLoading) {
      return 'Loading...';
    }
    return this.cityName === '' ? 'Enter your city name': ( this.cityName + ' is now: ' + this.temp);
  }
}
