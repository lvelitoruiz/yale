import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-event',
  templateUrl: './public-event.component.html',
  styleUrls: ['./public-event.component.scss']
})
export class PublicEventComponent {
  @Input() event!: any;



}
