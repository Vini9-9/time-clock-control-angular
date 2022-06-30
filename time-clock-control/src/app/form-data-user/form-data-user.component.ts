import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-data-user',
  templateUrl: './form-data-user.component.html',
  styleUrls: ['./form-data-user.component.css']
})
export class FormDataUserComponent implements OnInit {
  @Input() title: string | undefined;
  pageUrl: string | undefined;
  
  constructor(private router: Router) {
    this.pageUrl = router.url.replace('/','');
   }

  ngOnInit(): void {
  }

}
