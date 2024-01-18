import { Component, Input } from '@angular/core';
import { Contact } from '../../Interfaces/Contact.interface';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.css']
})
export class AgendaCardComponent {

  constructor() { }

  @Input()
  public contacts: Contact[] = []


}
