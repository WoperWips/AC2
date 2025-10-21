import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];
  private proximoId = 1;

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(titulo: string): void {
    const novaTarefa: Tarefa = {
      id: this.proximoId++,
      titulo,
      concluida: false
    };
    this.tarefas.push(novaTarefa);
  }

  remover(id: number): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  marcarConcluida(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }
}
