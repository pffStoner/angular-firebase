import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  id: number;
  editMode = false;
  // na tazi promenliva prisovqvame formata ot .html
  eventForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private eService: EventService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
  let eventName = '';
  let eventImgPath = '';
  let description = '';

  if (this.editMode) {
    const event = this.eService.getEvent(this.id);
    eventName = event.name;
    eventImgPath = event.img;
    description = event.description;
  }
  this.eventForm = new FormGroup({
    // trqbva da suvpadat s formControlName v .html
    'name': new FormControl(eventName),
    'imgUrl': new FormControl(eventImgPath),
    'description': new FormControl(description)
  });
  }
  onSubmit() {
    console.log(this.eventForm);
  }
}
