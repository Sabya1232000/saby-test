import { NotFoundComponent } from './not-found.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TaskListComponent },
  {path: 'task/add', component: TaskAddComponent },
  {path: 'task/detail/:taskName', component: TaskAddComponent },
  {path: 'task/detail', component: TaskListComponent },
  {path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
