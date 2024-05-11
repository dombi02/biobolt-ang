import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  logged_user?: firebase.default.User | null;

  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.someone_logged().subscribe(
        (user) => {
          this.logged_user = user;
          localStorage.setItem('user', JSON.stringify(this.logged_user));
        },
        (error) => {
          console.error('Hiba történt az autentikáció folyamán', error);
          localStorage.setItem('user', JSON.stringify(null));
        }
      );
    }
  }

  clickSidenav(nav: MatSidenav) {
    nav.toggle();
  }

  navClosed(event: any, nav: MatSidenav) {
    if (event === true) {
      nav.close();
    }
  }

  out(event?: boolean) {
    this.authService.out().then(() => {
      console.log('Sikeresen kiléptél!');
    }).catch(error => {
      console.error("Hiba a kilépés során", error);
    });
  }

  title = 'biobolt';
}
