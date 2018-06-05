import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]

})
export class EventsComponent implements OnInit {
  selectedEvent: Event;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.eventSelected
    .subscribe(
      (event: Event) => {
        this.selectedEvent = event;
      }
    );
  }

}
