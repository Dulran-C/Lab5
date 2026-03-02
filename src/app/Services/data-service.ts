import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient:HttpClient){}

  GetStudentData():Observable<any>{ <!--method used to fetch data from external api-->
    return this.httpClient.get('https://api.jsonblob.com/019caf2a-b942-7422-8261-bc1893bf772c')

  }

  GetWeatherData():Observable<any>{ <!--mwthod used to fetch data from weatherMap , both return Observables-->
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')
  }

}
