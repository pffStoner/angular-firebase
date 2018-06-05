 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { TaskEditComponent } from './task-list/task-edit/task-edit.component';
import { TaskListService } from './services/task-list.service';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventListComponent } from './events/event-list/event-list.component';






@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HeaderComponent,
    DropdownDirective,
    EventStartComponent,
    EventsComponent,
    EventDetailComponent,
    EventItemComponent,
    TaskEditComponent,
    EventEditComponent,
    EventListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
