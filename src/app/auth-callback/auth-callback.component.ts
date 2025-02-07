import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  loading: boolean = false; // Controle de loading
  error: string | null = null; // Mensagem de erro

  ngOnInit(): void {
    this.loading = true; // Inicia o loading

    // Usar ActivatedRoute para pegar parâmetros da URL de forma mais Angular-friendly
    this.route.queryParams.subscribe((params) => {
      const code = params['code'];

      if (code) {
        this.exchangeCodeForToken(code);
      } else {
        this.error = 'Código de autenticação não encontrado';
        this.loading = false; // Finaliza o loading se não houver código
      }
    });
  }

  private exchangeCodeForToken(code: string): void {
    this.authService.exchangeCodeForToken(code).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); // Salva o token
        this.router.navigate(['/home']); // Redireciona após login
      },
      error: (error) => {
        console.error('Erro ao trocar código por token', error);
        this.error = 'Falha ao autenticar. Tente novamente.';
      },
      complete: () => {
        this.loading = false; // Finaliza o loading
      },
    });
  }
}
