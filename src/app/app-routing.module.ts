import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login-home/login.component';
import { AccountCreateComponent } from './pages/login/account-create/account-create.component';

const routes: Routes = [
  {path: 'auth/callback', component: AuthCallbackComponent},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'createAccount', component: AccountCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
