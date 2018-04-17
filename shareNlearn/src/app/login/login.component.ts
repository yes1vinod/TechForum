import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
 

  error: any;
  constructor(public authService: AuthService) {
   

  }


  ngOnInit() {
  }
  
  loginButtonClick(){
    console.log("login button clicked");
    alert(this.email);
    alert(this.password);

    //this.authService.loginWithEmail(this.email,this.password);

    this.authService.signUpWithEmail(this.email,this.password);

  }  

}
