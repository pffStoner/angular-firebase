import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Form, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';


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
  onAddingTask() {
  (<FormArray> this.eventForm.get('tasks')).push(
    new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required  ),
    })
  );
  }

  private initForm() {
  let eventName = '';
  let eventImgPath = '';
  let description = '';
  // tslint:disable-next-line:prefer-const
  let eventTasks = new FormArray([]);

  if (this.editMode) {
    const event = this.eService.getEvent(this.id);
    eventName = event.name;
    eventImgPath = event.img;
    description = event.description;
    // proverqvame dali imame nqkakva zadachi
    if (event['task']) {
        // tslint:disable-next-line:prefer-const
        for (let task of event.task) {
            eventTasks.push(
              new FormGroup({
                'name': new FormControl(task.name, Validators.required),
                'description': new FormControl(task.description, Validators.required),
              })
            );
        }
    }
  }
  // prisvoqvame poletata ot .html
  this.eventForm = new FormGroup({
    // trqbva da suvpadat s formControlName v .html
    'name': new FormControl(eventName, Validators.required),
    'imgUrl': new FormControl(eventImgPath, Validators.required),
    'description': new FormControl(description, Validators.required),
    'tasks': eventTasks
  });
  }
  onSubmit() {
    const newEvent = new Event(
      this.eventForm.value['name'],
       this.eventForm.value['description'],
       this.eventForm.value['imgUrl'],
       this.eventForm.value['tasks']
      );

    if (this.editMode) {
      // moje da izpolzvame this.eventForm.value, to shte
      // ni vurne dannite vmesto da pravim newEvent(ako sme gi podredili kakto trqbva)
      this.eService.updateEvent(this.id, newEvent);
    } else {
      this.eService.addEvent(newEvent);
    }
    console.log(this.eventForm);
  }
}
