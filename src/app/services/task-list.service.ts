import { EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

export class TaskListService {

  tasksChanged = new EventEmitter<Task[]>();
  private tasks: Task[] = [
    new Task('Vozene', '5 uni'),
    new Task('bileti', '3 mart' ),
  ];

  getIngredients() {
    return this.tasks.slice();
  }

  addIngredient(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.emit(this.tasks.slice());
  }

  addIngredients(tasks: Task[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.tasks.push(...tasks);
    this.tasksChanged.emit(this.tasks.slice());
  }
}
