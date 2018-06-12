import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  id: number;
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.event = this.eventService.getEvent(this.id);
          }
        );
    }

    onAddToShoppingList() {
      this.eventService.addTaskToTaskList(this.event.task);
    }

    onEditEvent() {
      this.router.navigate(['edit'], {relativeTo: this.route});
      // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }
    onDeleteEvent() {
      this.eventService.deleteEvent(this.id);
      this.router.navigate(['/events']);
    }
    onGallery() {
      this.router.navigate(['gallery'], {relativeTo: this.route});

    }

}
