import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Output() eventSelected = new EventEmitter<void>();
  events: Event[] = [
    // tslint:disable-next-line:max-line-length
    new Event('Pohod', 'mnogo hodene', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/300px-Bachalpsee_reflection.jpg'),
    // tslint:disable-next-line:max-line-length
    new Event('Pohod', 'mnogo hodene', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/300px-Bachalpsee_reflection.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
}
