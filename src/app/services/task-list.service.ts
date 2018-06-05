import { EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

export class TaskListService {

  tasksChanged = new EventEmitter<Task[]>();
  private tasks: Task[] = [
    new Task('Vozene', '5 uni'),
    new Task('bileti', '3 mart' ),
  ];

  getTasks() {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.emit(this.tasks.slice());
  }

  addTasks(tasks: Task[]) {
    this.tasks.push(...tasks);
    this.tasksChanged.emit(this.tasks.slice());
  }
}