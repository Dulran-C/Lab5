import { Component, OnInit } from '@angular/core';
import { Data,RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  students:any[]=[];                                 <!--arrays to store data -->
  weather: any[]=[];
  constructor(private dataService:DataService){ }

  ngOnInit(): void { 
    this.dataService.GetStudentData().subscribe(     <!--subscribed used because GetStudentData() returns observable -->
      (data)=>{
      this.students = data.students;
      console.log(this.students);
      }
    );  

    this.dataService.GetWeatherData().subscribe(     <!--calling service to gather weather data-->
      (data)=>{
        this.weather = data.weather;
        console.log(this.weather);
      }
    );
  }
}
