import { DataService } from './../data.service';
import { fadeVertically } from './../animations';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations'


@Component({
  selector: 'task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
  providers: [DataService],
  animations: [
    fadeVertically
  ]
})
export class TaskAddComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  describe:string = '';
  name:string = '';
  titleAlert:string = 'This field is Required';

  constructor(private fb : FormBuilder) { 
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose(
                              [Validators.required, Validators.minLength(30), Validators.maxLength(500)]
                      )],
      'chkValidate': ''
    });

  }


  addPost(post){
    this.describe = post.describe;
    this.name = post.name;
  }

  ngOnInit() {
  }

}
