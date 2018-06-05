import { Task } from './task.model';

export class Event {
    constructor(public name: string, public description: string, public img: string,
         public task: Task[], public date?: string) {

    }
}
