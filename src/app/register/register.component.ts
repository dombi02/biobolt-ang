import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/User';
import { UserService } from '../services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    username: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    })
    
  });

  constructor(private loc:Location, private router:Router, private authService:AuthService, private uS:UserService) {}
  ngOnInit(): void {

  }

  onSubmit(){
    // console.log("Siker")
    this.authService.register(String(this.signUpForm.get('email')?.value), String(this.signUpForm.get('password')?.value)).then(cred =>{
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get("email")?.value as string,
        username: this.signUpForm.get("username")?.value as string,
        name: {
          firstname: this.signUpForm.get("name.firstname")?.value as string,
          lastname: this.signUpForm.get("name.lastname")?.value as string
        }
      };
      this.uS.cre(user).then(a => {
        console.log("Felhasznalo hozzaadva.");
      }).catch(error => {
        console.error("Nem sikerult hozzadni a felhasznalot.", error);
      })
      this.router.navigateByUrl('/login');
    }).catch(error => {
      console.error("Hiba tortent a regisztracio soran!", error);
    });
  }

  back() {
    this.loc.back();
  }
}
