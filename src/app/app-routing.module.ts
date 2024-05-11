import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'search/:searchTerm', component:MainComponent},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  {path:'tag/:tag', component:MainComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'message-view', component: MessageViewComponent,
    canActivate: [AuthGuard]
  },
  {path:'profile-view', component: ProfileViewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
