import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaPageComponent } from './Pages/agenda-page/agenda-page.component';
import { AddContactPageComponent } from './Pages/add-contact-page/add-contact-page.component';
import { EditContactComponent } from './Components/edit-contact/edit-contact.component';


const routes: Routes = [
  { path: '', component: AgendaPageComponent },
  { path: 'create', component: AddContactPageComponent },
  { path: 'edit/:id', component: EditContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
