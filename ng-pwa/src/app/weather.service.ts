import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService {
    constructor(private http: Http) {}

    getTemp(cityName: string) {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=2ae0757cb2cbf4f0ea2beb32bcca16c1&units=metric&q=' + cityName;
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.main.temp);
    }
}