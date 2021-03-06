import { Component } from '@angular/core';
import { TourEventsService } from 'src/app/core/services/tour-events.service';

@Component({
  selector: 'app-tour-events',
  templateUrl: './tour-events.component.html',
  styleUrls: ['./tour-events.component.css']
})
export class TourEventsComponent {
  constructor(private eventService: TourEventsService) { }
  
  events$ = this.eventService.getEvents();
}
