import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaPageComponent } from './Pages/agenda-page/agenda-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AgendaCardComponent } from './Components/agenda-card/agenda-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AddContactPageComponent } from './Pages/add-contact-page/add-contact-page.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';



@NgModule({
  declarations: [
    AgendaPageComponent,
    AgendaCardComponent,
    AddContactPageComponent,
    EditContactComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule { }
