import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EventsListingsComponent } from './events-listings.component';
import { ListEventsComponent } from './list-events.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './shared/events.service';
import {JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsableWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {RouterModule } from '@angular/router';
import { appRoutes } from './router';
import { CreateEventComponent } from './shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './shared/events-resolver.service';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe } from './shared/duration.pipe';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter-service.component';
import { LocationValidator } from './shared/location-validator.directive';
import { EventResolver } from './event-resolver.service';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    EventsListingsComponent,
    ListEventsComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],

  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    EventResolver,
    EventListResolver,
    {provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  },
  AuthService,
  VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState (component: CreateEventComponent) {
if (component.isDirty) {
  return window.confirm('You have not saved this event, do you want to really cancel?');
} else {
  return true;
}
}
