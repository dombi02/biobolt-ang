import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/User';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  user?: User;

  constructor(private uS: UserService, private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    if (userData) {
      this.uS.rea(userData.uid).subscribe(d => {
        this.user = d;
      });
    }
  }

  updateUser(user: User): void {
    this.uS.upd(user)
      .then(() => {
        console.log('Frissites sikeres.');
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        console.error('Frissites sikertelen.', error);
      });
  }

  deleteUser(userId: string): void {
    this.uS.del(userId)
      .then(() => {
        console.log('Felhasznalo torlese sikeres.');
        this.router.navigateByUrl('/register');
        this.out();
      })
      .catch(error => {
        console.error('Hiba tortent a torles soran:', error);
      });
  }

  out(event?: boolean) {
    this.authService.out().then(() => {
      console.log('Sikeres kilepes.');
    }).catch(error => {
      console.error("Hiba kilepeskor.", error);
    });
  }
}
