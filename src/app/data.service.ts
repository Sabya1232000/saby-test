import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/tasks').subscribe(data => {
      console.log(data);
    });
  }

  getTasks(){ //returning Observable
    return this.http.get<Task[]>('http://localhost:3000/api/tasks');
    
    /*.subscribe(
      data => {
        console.log('Saby Data ->'+data);
        this.taskList= data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );*/
  }

  postTasks(task :Task){ //returning Observable
    return this.http.post<Task>('http://localhost:3000/api/task',task);
  }

  deleteTasks(_id :string){ //returning Observable
    return this.http.delete<Task>('http://localhost:3000/api/task/'+_id);
  }

}
