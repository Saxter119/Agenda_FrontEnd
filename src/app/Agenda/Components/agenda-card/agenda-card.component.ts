import { Component, Input } from '@angular/core';
import { Contact } from '../../Interfaces/Contact.interface';
import { AgendaService } from '../../Services/agenda.service';

import swal from 'sweetalert2'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.css']
})
export class AgendaCardComponent {

  constructor(private agendaService: AgendaService) { }

  @Input()
  public contacts: Contact[] = []


  removeContact(id: number) {

    const contactToDelete = this.contacts.find(c => c.id == id);

    Swal.fire({
      title: `¿Estás seguro que desea eliminar a ${contactToDelete?.name}?`,
      text: 'Esta acción no es reversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminalo!',
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {

      if(result.isConfirmed) {

        this.agendaService.delete(id).subscribe(resp => {
          Swal.fire('Eliminado!', `${contactToDelete?.name} ha sido eliminado`, 'success');

          this.contacts = this.contacts.filter(c => c.id !== contactToDelete?.id)

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire('Cancelado', 'No se ha eliminado el contacto', 'info');

      }





    });

  }
}
