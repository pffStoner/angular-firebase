import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event-list/event/event.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventStartComponent } from './event-list/event-start/event-start.component';
import { EventDetailsComponent } from './event-list/event-details/event-details.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'events', component: EventListComponent, children: [
        {path: '', component: EventStartComponent },
        {path: ':id', component: EventDetailsComponent}
    ] },
    { path: 'tasks', component: TaskListComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}



