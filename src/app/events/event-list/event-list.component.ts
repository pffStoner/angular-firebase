import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  onNewEvent() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
