import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../entities/users.model';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-form-data-user',
  templateUrl: './form-data-user.component.html',
  styleUrls: ['./form-data-user.component.css']
})
export class FormDataUserComponent implements OnInit {
  @Input() title: string | undefined;
  pageUrl: string = '';
  messageError: string | undefined;

  userName = '';
  userEmail = '';
  userPassword = '';
  
  constructor(private router: Router, private userService: UserService) {
    this.pageUrl = router.url.replace('/','');
   }

  ngOnInit(): void {
  }

  submit(){
    this.userEmail = this.userEmail.trim();
    if(this.pageUrl.includes('signup')){
      this.signup()
      return
    }
    if(this.pageUrl.includes('login')){
      this.login()
      return
    }
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
        this.messageError = undefined;
      }, errors => {
        console.error('Something went bad');
        this.messageError = errors.error.message;
      }
    );
  }

  login() {
    this.userService.authUser(this.userEmail, this.userPassword).subscribe
    (
      response => {
        console.log("user logged!")
        console.log(response)
        this.messageError = undefined;
        // api.defaults.headers.common = { 'Authorization': `Bearer ${response.token}` }
        // AsyncStorage.setItem('@controle-ponto:user', JSON.stringify(response.user))
        // AsyncStorage.setItem('@controle-ponto:token', response.token)
      }, errors => {
        console.error('Something went bad');
        this.messageError = errors.error.message;
      }
    );
  }

}
