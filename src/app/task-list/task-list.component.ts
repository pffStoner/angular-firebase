import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    new Task('transport', '12 mai', '15 mai', '5 koli'),
    new Task('transport', '12 mai', '5 koli')
  ];

  constructor() { }

  ngOnInit() {
  }

}
