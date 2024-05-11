import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Router importálása a helyes modulból
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // A "styleUrl" helyett "styleUrls" használata
})
export class LoginComponent implements OnInit {

  user = new FormControl();
  password = new FormControl();

  ngOnInit(): void {
    
  }
  
  login() {
    this.authService.login(this.user.value,this.password.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/');
    }).catch(error => {
      console.error(error);
    });
    
  }
  
  
  errorMessage = '';
  constructor(private router: Router, private authService: AuthService) {
    
  }

  
}
