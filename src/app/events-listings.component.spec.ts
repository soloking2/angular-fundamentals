import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListingsComponent } from './events-listings.component';

describe('EventsListingsComponent', () => {
  let component: EventsListingsComponent;
  let fixture: ComponentFixture<EventsListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
