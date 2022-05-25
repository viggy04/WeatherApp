import { Component, OnInit } from '@angular/core';
import { Root } from './models/models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherAp';

  constructor(private service: WeatherService) {

  }
// weatherData?:Root;
  ngOnInit(): void {
    // this.service.getWeatherData('Wellington').subscribe({
    //   next: (response) => {
    //     this.weatherData = response;
    //     console.log(response);
    //   }
    // })
  }


}
