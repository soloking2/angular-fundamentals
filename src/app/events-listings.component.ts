import { Component, OnInit} from '@angular/core';
import { EventService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
  template: `<div>
  <h2>{{title}}</h2>
  <hr>
  <div class="row">
  <div *ngFor="let event of events" class="col-md-6">
  <app-list-event [event]="event" (eventClick)="handleEventClicked($event)"></app-list-event>
  </div>
  </div>
  </div>`
})
export class EventsListingsComponent implements OnInit {
  title = 'Upcoming Angular Events';
  events: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
   this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data) {
    console.log('Received:', data);
  }
}
