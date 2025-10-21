import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html',
  styleUrls: ['./cadastrar-tarefa.css']
})
export class CadastrarTarefaComponent {
  titulo: string = '';

  constructor(private tarefaService: TarefaService) {}

  cadastrar() {
    if (this.titulo.trim() !== '') {
      this.tarefaService.adicionar(this.titulo);
      this.titulo = '';
      alert('Tarefa cadastrada com sucesso!');
    }
  }
}
