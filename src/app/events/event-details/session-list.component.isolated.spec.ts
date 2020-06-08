import { SessionListComponent } from './session-list.component';
import { ISession } from '../../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  // tslint:disable-next-line: prefer-const
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should fileter the sessions correctly', () => {
      component.sessions = <ISession[]>[{
        name: 'session 1',
        level: 'intermediate'
      },
      {
        name: 'session 3',
        level: 'intermediate'
      },
      {
        name: 'session 2',
        level: 'beginner'
      }

      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
