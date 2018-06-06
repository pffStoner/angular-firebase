import { Task } from '../models/task.model';
import { Subject } from 'rxjs';

export class TaskListService {

  tasksChanged = new Subject<Task[]>();
  private tasks: Task[] = [
    new Task('Vozene', '5 uni'),
    new Task('bileti', '3 mart' ),
  ];

  getTasks() {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    console.log(task);
    this.tasksChanged.next(this.tasks.slice());
  }

  addTasks(tasks: Task[]) {
    this.tasks.push(...tasks);
    this.tasksChanged.next(this.tasks.slice());
  }
}
