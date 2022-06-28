import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'time-clock-control';
  logoHeader = "../assets/logo/click-clock-header.png"; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
