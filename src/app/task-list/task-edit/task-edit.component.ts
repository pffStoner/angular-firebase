import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../services/task-list.service';
import { Task } from '../../models/task.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {


  constructor(private tsService: TaskListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
   const value = form.value;
    const newTask = new Task(value.name);
    this.tsService.addTask(newTask);
  }

}
