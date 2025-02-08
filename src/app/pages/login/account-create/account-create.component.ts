import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.scss',
  encapsulation: ViewEncapsulation.None // Permite que os estilos afetem toda a aplicação
})
export class AccountCreateComponent {
  
  showPassword: boolean = false;
  public createNewAccount!: FormGroup; // Apenas a declaração da variável

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.createNewAccount = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePassword() {
    console.log(this.showPassword)
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.createNewAccount.valid) {
      console.log("Formulário válido!", this.createNewAccount.value);
      this.userService.createUser(this.createNewAccount.value).subscribe({
        next: (res) => {
          console.log('res ==> ', res);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log('error ==> ', error);
        },
      });
    } else {
      console.log('Formulário inválido!', this.createNewAccount.errors);
    }
  }
}
