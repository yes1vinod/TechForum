import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  userMessage: string;


  error: any;
  constructor(public authService: AuthService) {
    this.userMessage = "";


  }


  ngOnInit() {
  }

  /**
   * Sign up method 
   */
  singUpByEmailIDButton() {
    this.authService.signUpWithEmail(this.email, this.password)
      .then((res) => {
        console.log(res);
        this.userMessage = this.email + " Added successfully!"
      })
      .catch((err) => {
        console.log(err);
        this.userMessage = err + " Failed to Add User !"
      });
  }

  loginByEmailIDButtonClick() {
    console.log("login button clicked");
    this.authService.loginWithEmail(this.email, this.password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });


  }

}
