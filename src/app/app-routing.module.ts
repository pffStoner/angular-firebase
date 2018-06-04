import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event-list/event/event.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EventListComponent } from './event-list/event-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'events', component: EventListComponent},
    { path: 'tasks', component: TaskListComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}



