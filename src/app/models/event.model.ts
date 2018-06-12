import { Task } from './task.model';

export class Event {
    constructor(public name: string, public description: string, public img: string,
         public task: Task[], public startDate?: string, public endDate?: string) {

    }
}
