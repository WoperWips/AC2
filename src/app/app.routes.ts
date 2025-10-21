import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './components/cadastrar-tarefa/cadastrar-tarefa';
import { ListarTarefaComponent } from './components/listar-tarefa/listar-tarefa';

export const routes: Routes = [
  { path: 'cadastrar', component: CadastrarTarefaComponent },
  { path: 'lista', component: ListarTarefaComponent },
  { path: '', redirectTo: 'lista', pathMatch: 'full' }
];
