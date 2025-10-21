import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa o módulo de rotas para usar RouterOutlet, RouterLink, etc.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],  // importa o RouterModule inteiro
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Meu App Angular';  // título como string, não função
}
