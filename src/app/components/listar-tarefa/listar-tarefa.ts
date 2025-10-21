import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-listar-tarefa',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-tarefa.html',
  styleUrls: ['./listar-tarefa.css']
})
export class ListarTarefaComponent {
  constructor(public tarefaService: TarefaService) {}

  remover(id: number) {
    this.tarefaService.remover(id);
  }

  concluir(id: number) {
    this.tarefaService.marcarConcluida(id);
  }

  get tarefas(): Tarefa[] {
    return this.tarefaService.listar();
  }
}
