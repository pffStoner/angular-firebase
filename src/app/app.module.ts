import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event-list/event/event.component';
import { EventEditComponent } from './event-list/event-edit/event-edit.component';
import { EventDetailsComponent } from './event-list/event-details/event-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { TaskListEditComponent } from './task-list/task-list-edit/task-list-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    EventEditComponent,
    EventDetailsComponent,
    TaskListComponent,
    HeaderComponent,
    TaskListEditComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
