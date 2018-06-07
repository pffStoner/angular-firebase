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
        // map-vame zashtot moje da ni vurne obekt bez nqkoi poleta i posle da poluchim greshki
        // pri opit za rabota s tqh
        this.http.get('https://travelnetwork-db40e.firebaseio.com/events.json')
    /*    .map(
            (response: Response) => {
                /// proverqvame dali ima takova property i ako nqma dobavqme prazno,
                // taka nqma da pravi problemi
                for (const event of events) {
                    if (!event['task']) {
                        event['task'] = [];
                    }
                }
                return events;
            }
        )*/
        .subscribe(
            (response: Response) => {
                const events: Event[] = response.json();

                this.eService.setEvents(events);
            }
        );
    }
}
