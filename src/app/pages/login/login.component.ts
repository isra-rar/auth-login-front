import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: LoginRequest = { username: '', password: ''}
  showPassword: boolean = false; 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log("res ==> ", res);
      },
      error: (error) => {
        console.log("error ==> ", error);
      }
    })
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
