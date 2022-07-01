import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entities/users/users.model';
import { UserService } from '../entities/users/users.service';

@Component({
  selector: 'app-form-data-user',
  templateUrl: './form-data-user.component.html',
  styleUrls: ['./form-data-user.component.css']
})
export class FormDataUserComponent implements OnInit {
  @Input() title: string | undefined;
  pageUrl: string | undefined;

  userName = '';
  userEmail = '';
  userPassword = '';
  
  constructor(private router: Router, private userService: UserService) {
    this.pageUrl = router.url.replace('/','');
   }

  ngOnInit(): void {
  }

  signup() {
    const newUser:User = {
      name: this.userName,
      email: this.userEmail,
      password: this.userPassword
    }
    this.userService.saveUser(newUser).subscribe
    (
      () => {
        console.log("user saved!")
      }, errors => {
        console.error('Something went bad');
        console.log(errors);
      }
    );
  }

}