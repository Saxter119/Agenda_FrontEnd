import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Interfaces/Contact.interface';
import { AgendaService } from '../../Services/agenda.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.css']
})
export class AgendaPageComponent implements OnInit {

  constructor(private _agendaService: AgendaService) {

  }

  public contacts: Contact[] = []

  ngOnInit(): void {
    this._agendaService.getAll().subscribe(response =>
      this.contacts = response
    )
  }



}
