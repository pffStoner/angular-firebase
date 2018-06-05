import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(private taskService: TaskListService) {

   }

   ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.taskService.tasksChanged
      .subscribe(
        (tasks: Task[]) => {
          this.tasks = tasks;
        }
      );
  }

}
