import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credentials: LoginRequest = { username: '', password: '' };
  showPassword: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log('res ==> ', res);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log('error ==> ', error);
      },
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginWithGoogle() {
    window.location.href =
      'https://accounts.google.com/o/oauth2/auth?' +
      'client_id=196774121280-1hiicc2ulo073omhv7fddgsj2snp1404.apps.googleusercontent.com' +
      '&redirect_uri=http://localhost:4200/auth/callback' +
      '&response_type=code' +
      '&scope=openid email profile';
  }
}
