import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<Root> {
    return this.http.get<Root>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue), params: new HttpParams()
          .set('q', cityName)
          .set('units', 'metric')
          .set('mode', 'json')
    })

  }

  //   let headers = new HttpHeaders({
  //     'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
  //     'x-rapidapi-key': '61d677f0fcmsh7932f9dd9a72181p173f1bjsnf0bff0c8f438'
  //   });
  //   this.http.get<any>('https://random-facts2.p.rapidapi.com/getfact', {
  //     headers: headers
  //   })
  //     .subscribe(data => {
  //       console.log(data);
  //     });

  // 

  // getWeatherData(cityName: string) {
  //   let headers = new HttpHeaders({
  //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com/weather',
  //     'x-rapidapi-key': '61d677f0fcmsh7932f9dd9a72181p173f1bjsnf0bff0c8f438'
  //   });
  //   this.http.get<Root>('https://community-open-weather-map.p.rapidapi.com/weather', {
  //     headers: headers
  //   }).subscribe((data: any) => {
  //     console.log(data);
  //     return data;
  //   })
  // }



}
