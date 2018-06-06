import { Event } from '../models/event.model';
import { Task } from '../models/task.model';
import { EventEmitter, Injectable } from '@angular/core';
import { TaskListService } from './task-list.service';


@Injectable()
export class EventService {
    // eventSelected = new EventEmitter<Task>();

    private events: Event[] = [
        // tslint:disable-next-line:max-line-length
        new Event('Pohod2', 'mnogo hodene',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/300px-Bachalpsee_reflection.jpg',
        [
            new Task('voнекаф таскzene', '1 uni'),
            new Task('kupuvane na hrana', '3 mart'),
        ]),
        // tslint:disable-next-line:max-line-length
        new Event('По пътя на кървавото писмо', 'След обявяването на въстанието в града той пише това писмо, с което съобщава на своите съмишленици в Панагюрище, че въстанието е започнало, и го подписва с кръв от убития мюдюрин. Писмото е изпратено на 20 април (стар стил) до Георги Бенковски в Панагюрище. To е пренесено от 19-годишния Георги Салчев, който изминава 5-часовия път от Копривщица до Панагюрище само за 2 часа. Точно преди Панагюрище конят на преносителя на кървавото писмо издъхва от натоварването.',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/300px-Bachalpsee_reflection.jpg',
         [
            new Task('vozene', '1 uni'),
            new Task('kupuvane na bileti', '3 mart'),
        ])
      ];

      constructor(private tsService: TaskListService) {

      }

      getEvents() {
        return this.events.slice();
      }

      getEvent(index: number) {
        return this.events[index];
      }

      addTaskToTaskList(tasks: Task[]) {
        this.tsService.addTasks(tasks);
      }
}
