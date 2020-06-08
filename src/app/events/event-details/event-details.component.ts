import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from 'src/app/shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `.event-image{height: 100px;}
    a{cursor:pointer}
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: Boolean;
  filterBy: String = 'all';
  sortBy: String = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit () {
    this.route.data.forEach((data) => {
     this.event = data['event'];
      this.addMode = false;
    });
  }
  addSession() {
    this.addMode = true;
  }

  cancelAddSession() {
    this.addMode = false;
  }
  saveSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }
}
