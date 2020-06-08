import {Component, Input, EventEmitter, Output} from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'app-list-event',
  template: `
    <div *ngIf="event" [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <p>Date: {{event?.date | date: 'shortDate'}}</p>
    <div [ngStyle]="styleChange()" [ngClass]="colorBold()" [ngSwitch]="event?.time">
    Time: {{event?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <p>Price: {{event?.price | currency:'USD'}}</p>
    <div [hidden]="!event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span class="pad-left">{{event?.location?.city}}</span><span class="pad-left">{{event?.location?.country}}</span></div>
    <button class="btn btn-primary" (click)="handleClick()">Click me!</button>
    </div>`,
    styles: [`
    .yellow {color: yellow !important;}
    .bold {font-weight: bold;}
    .pad-left { margin-left: 5px;}
    .thumbnail{min-height: 250px}`
    ]
})

export class ListEventsComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  handleClick() {
    this.eventClick.emit(this.event.name);
  }

  colorBold() {
    if (this.event && this.event.time === '8:00 am') {
      return ['yellow', 'bold'];
    } else {
      return [];
    }

  }

  styleChange(): any {
    if (this.event && this.event.time === '10:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    } else {
      return {};
    }
  }
}
