import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EventService } from './event.service';
import { Event } from '../models/event.model';


@Injectable()
export class DataStorageService {
    constructor(private http: Http, private eService: EventService ) {
    }
    // vrushta ni observable za koito sme subsribe i moje da go izpolzvame drugade
    storeEvents() {
        return this.http.put('https://travelnetwork-db40e.firebaseio.com/events.json',
     this.eService.getEvents());
    }
    getEvents() {
        this.http.get('https://travelnetwork-db40e.firebaseio.com/events.json')
        .subscribe(
            (response: Response) => {
                const events: Event[] = response.json();
                this.eService.setEvents(events);
            }
        );
    }
}
