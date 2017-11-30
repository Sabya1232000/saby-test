import { fade } from './../animations';
import { DataService } from './../data.service';
import { Task } from './../task';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [DataService],
  animations: [
    fade
  ]
})
export class TaskListComponent implements OnInit {
  newTask: string;
  taskId = '';
  taskTitle = '';
  taskList : Task[];
  isTaskSuccessfullyAdded = false;
  isTaskSuccessfullyDeleted = false;
  constructor(private dataSevice: DataService) {
   this.dataSevice.getTasks().subscribe(
      (data) => {
        this.taskList = data;
        console.log('Saby Data ->'+this.taskList);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }

    );
  }

  ngOnInit(): void {
    console.log('**************** Inside init()');
  }

  onTaskAdd(){
    if(this.newTask){
      let taskJ : Task= {title: "", isDone: false, _id: null};
      taskJ.title = this.newTask
      this.dataSevice.postTasks(taskJ).subscribe(
        (data) =>{
          this.taskList.push(data);
          this.taskId = data._id
          this.newTask = '';
          this.isTaskSuccessfullyAdded = true;
          setTimeout(() => {this.isTaskSuccessfullyAdded = false}, 4000);

        },
       (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
        );
      
    }
  }

  onDeleteTask(task: Task){
    this.dataSevice.deleteTasks(task._id).subscribe(
      (data) =>{
        console.log(data);
        this.taskList.splice(this.taskList.indexOf(task),1);
        this.isTaskSuccessfullyDeleted = true;
        this.taskTitle = data.title;
        setTimeout(() => {this.isTaskSuccessfullyDeleted = false}, 4000);

      },
     (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
      );
  }
}
