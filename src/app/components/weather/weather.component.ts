import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/models/models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private service: WeatherService) { }

  cityName: string ='Auckland';
  weatherData?: Root;
  ngOnInit(): void {
    // this.service.getWeatherData('Wellington').subscribe({
    //   next: (response) => {
    //     this.weatherData = response;
    //     console.log(response);
    //   }
    // })
    this.getWeatherData(this.cityName);

  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.service.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }


}
