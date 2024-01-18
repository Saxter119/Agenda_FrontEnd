import { Component, OnInit } from '@angular/core';
import { Contact, Email, Phone } from '../../Interfaces/Contact.interface';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from '../../Services/agenda.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact: Contact
  contactId: number
  editContactForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private agendaService: AgendaService,
  ) {
    this.contactId = this.activatedRoute.snapshot.params['id']
  }


  ngOnInit(): void {

    this.agendaService.getById(this.contactId).subscribe(contact => {
      this.contact = contact
      this.fillForm()
    })
  }

  fillForm() {

    const { name, phones, emails, direction, lastName, id, nationalId } = this.contact



    this.editContactForm = new FormGroup({
      name: new FormControl(name),
      lastName: new FormControl(lastName),
      nationalId: new FormControl(nationalId),
      direction: new FormControl(direction),
      phones: new FormArray(this.getPhonesFormArray(phones)),
      emails: new FormArray(this.getEmailsFormArray(emails)),
    })

    console.log(this.editContactForm.value);


  }

  get phones(): FormArray {
    return this.editContactForm.controls["phones"] as FormArray;
  }

  get emails(): FormArray {
    return this.editContactForm.controls["emails"] as FormArray;
  }


  getPhonesFormArray(phones: Phone[]) {
    let phonesFormArray: FormGroup[] = [];
    phones.forEach(phone => {
      const formGroup = new FormGroup({
        id: new FormControl(phone.id),
        number: new FormControl(phone.number, [Validators.nullValidator, Validators.requiredTrue]),
      })
      phonesFormArray.push(formGroup)
    });

    return phonesFormArray;
  }

  getEmailsFormArray(emails: Email[]) {
    let emailsFormArray: FormGroup[] = [];
    emails.forEach(email => {
      const formGroup = new FormGroup({
        id: new FormControl(email.id),
        emailContact: new FormControl(email.emailContact, [Validators.nullValidator, Validators.requiredTrue]),
      })
      emailsFormArray.push(formGroup)
    });

    return emailsFormArray;
  }


  public addEmailFormGroup() {
    this.emails.push(new FormGroup({
      emailContact: new FormControl('', [Validators.nullValidator, Validators.requiredTrue])
    }))
  }

  public removeEmailFormGroup(index: number) {
    if (this.emails.length > 1) {

      this.agendaService.deleteEmailById(this.emails.at(index).value.id).subscribe(resp => {
        console.log(resp);
        this.emails.removeAt(index)
      })

    }
  }

  public addPhoneFormGroup() {
    this.phones.push(new FormGroup({
      number: new FormControl('', [Validators.nullValidator, Validators.requiredTrue])
    }))
  }

  public removePhoneFormGroup(index: number) {
    if (this.phones.length > 1) {

      this.agendaService.deletePhoneById(this.phones.at(index).value.id).subscribe(resp => {
        console.log(resp);
        this.phones.removeAt(index)
      })

    }
  }

  editContact() {
    const body = {
      id: this.contactId,
      ...this.editContactForm.value
    }

    this.agendaService.update(body).subscribe(resp => {
      console.log(resp);

    })
  }

  removeContact(id: number) {
    this.agendaService.delete(id)
  }

}
