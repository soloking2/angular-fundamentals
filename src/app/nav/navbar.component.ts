import {Component} from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../shared/event.model';
import { EventService } from '../shared/events.service';

@Component({
  selector: 'app-navbar-nav',
  templateUrl: 'navbar.component.html',
  styles: [
    `.nav.navbar-nav{font-size: 15px;}
    #searchForm{margin-right: 100px;}
    @media(max-width:1200px){#seachForm{display:none;}}
    li > a.active {background-color: orange; color:#fff;}
    `
  ]
})

export class NavbarComponent {
  // tslint:disable-next-line: quotemark
  searchTerm: String = "";
  foundSessions: ISession[];

  constructor(private authentic: AuthService, private eventService: EventService) {

}

searchSessions(searchTerm) {
  this.eventService.searchSessions(searchTerm).subscribe(sessions => {this.foundSessions = sessions;
  });
}

}
