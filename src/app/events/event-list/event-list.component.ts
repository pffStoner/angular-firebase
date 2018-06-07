import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../../models/event.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  events: Event[];
  subscribtion = new Subscription;

  constructor(private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    // ako se pomeni shte poluchim tuk nov array ot events
    this.subscribtion = this.eventService.eventChanged.subscribe(
        (event: Event[]) => {
          // prisvoqvame poluchenite eventi na tezi, koito izpolzvame za display
          this.events = event;
        }
    );
  
    //
    this.events = this.eventService.getEvents();
  }

  onNewEvent() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
