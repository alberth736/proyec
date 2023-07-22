import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: any;
  constructor(private router: Router) {}

  login() {
    // Realizar aquí la lógica de autenticación si es necesario.
    // Por ahora, simplemente redirigiremos al componente del blog.
    this.router.navigate(['/']);
  }

  goToBlogs() {
    this.router.navigate(['/blog']);
  }
}
