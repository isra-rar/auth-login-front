import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login-home/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountCreateComponent } from './pages/login/account-create/account-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthCallbackComponent,
    HomeComponent,
    AccountCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
