import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',]
})
export class NavBarComponent implements OnInit {
  logo: string = "../assets/logo/click-clock-header.png";
  constructor() { }

  ngOnInit(): void {
  }

}
