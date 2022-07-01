import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',]
})
export class NavBarComponent implements OnInit {
  logo: string = "../assets/logo/click-clock-header.png";
  pageUrl: string | undefined;
  
  constructor(private router: Router) {
    this.pageUrl = router.url.replace('/','');
   }

  ngOnInit(): void {
  }

}
