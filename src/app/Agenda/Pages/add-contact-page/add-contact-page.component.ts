import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgendaService } from '../../Services/agenda.service';
import { Contact } from '../../Interfaces/Contact.interface';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact-page',
  templateUrl: './add-contact-page.component.html',
  styleUrls: ['./add-contact-page.component.css']
})
export class AddContactPageComponent implements OnInit {

  constructor(
    private _agendaService: AgendaService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {

  }

  public contactFormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    nationalId: new FormControl(''),
    direction: new FormControl(''),
    phones: new FormArray([this.createPhoneFormGroup()]),
    emails: new FormArray([this.createEmailFormGroup()])
  })

  /////////////////////////////Methods for form array emails

  public addEmailFormGroup() {
    this.emails.push(this.createEmailFormGroup())
  }

  public removeEmailFormGroup(index: number) {
    if (this.emails.length > 1) {
      this.emails.removeAt(index)
    }
  }

  private createEmailFormGroup(): FormGroup {
    return new FormGroup({
      emailContact: new FormControl('', [Validators.email, Validators.required]),
    })
  }

  get emails(): FormArray {
    return this.contactFormGroup.controls["emails"] as FormArray;
  }



  //////////////////////////////////Methods for form array phones

  get phones(): FormArray {
    return this.contactFormGroup.controls["phones"] as FormArray;
  }

  public addPhoneFormGroup() {
    this.phones.push(this.createPhoneFormGroup())
  }

  public removePhoneFormGroup(index: number) {
    if (this.phones.length > 1) {
      this.phones.removeAt(index)
    }
  }

  private createPhoneFormGroup(): FormGroup {
    return new FormGroup({
      number: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    })
  }



  createContact() {


    if (this.contactFormGroup.invalid) {

      Swal.fire({
        title: 'Contacto incompleto',
        text: 'El contacto debe tener al menos un nombre y un numero o correo válido.',
        icon: 'error',
      }
      )

      return
    }


    const contact = {
      name: this.contactFormGroup.value.name!,
      lastName: this.contactFormGroup.value.lastName!,
      nationalId: this.contactFormGroup.value.nationalId!,
      direction: this.contactFormGroup.value.direction!,
      emails: this.contactFormGroup.value.emails!,
      phones: this.contactFormGroup.value.phones!
    }


    console.log(contact);

    this._agendaService.post(contact).subscribe(res=> {
      this.router.navigate(['./'])
    });


    Swal.fire('Contacto creado', `El contacto ${contact.name} ha sido creado`, 'success')

    this.router.navigate(['./'])


    console.log("enviado");

  }


}
