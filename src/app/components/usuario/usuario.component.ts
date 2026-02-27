import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnviaformularioService } from '../../services/enviaformulario.service';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  private http = inject(HttpClient);
  private enviarFormularioService = inject(EnviaformularioService);
  usuarios: any[] = [];
  error: string | null = null;

  ngOnInit(): void {
    this.http.get<any[]>('https://api.github.com/users').subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
        this.error = 'Ocorreu um erro ao buscar os usuários. Por favor, tente novamente mais tarde.';
      }
    });
  }

  enviarformulario() {
    const usersName = this.usuarios.map(user => user.login);
    this.enviarFormularioService.enviarFormulario(usersName);
  }

}
