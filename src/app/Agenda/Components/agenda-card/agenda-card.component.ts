import { Component, Input } from '@angular/core';
import { Contact } from '../../Interfaces/Contact.interface';
import { AgendaService } from '../../Services/agenda.service';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.css']
})
export class AgendaCardComponent {

  constructor(private agendaService : AgendaService) { }

  @Input()
  public contacts: Contact[] = []

  removeContact(id: number) {
    this.agendaService.delete(id)
  }
}
