import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { MessageViewComponent } from './message-view/message-view.component'
import { UpperCase } from './shared/pipes/UpperCase';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    ProfileViewComponent,
    MessageViewComponent,
    UpperCase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp({"projectId":"bio-angular","appId":"1:1013596750901:web:682ea88a7fc0a1596f5d7c","storageBucket":"bio-angular.appspot.com","apiKey":"AIzaSyCEwfhHZDNyvpDpAqsnL5-wfCFIsXQXC5U","authDomain":"bio-angular.firebaseapp.com","messagingSenderId":"1013596750901","measurementId":"G-WMP00YPJVY"}),
    provideFirebaseApp(() => initializeApp({"projectId":"bio-angular","appId":"1:1013596750901:web:682ea88a7fc0a1596f5d7c","storageBucket":"bio-angular.appspot.com","apiKey":"AIzaSyCEwfhHZDNyvpDpAqsnL5-wfCFIsXQXC5U","authDomain":"bio-angular.firebaseapp.com","messagingSenderId":"1013596750901","measurementId":"G-WMP00YPJVY"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
