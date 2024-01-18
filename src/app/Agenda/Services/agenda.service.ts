import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../Interfaces/Contact.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private _httpClient: HttpClient) { }

  // should be created as a enviorment const
  private apiUrl: string = 'https://localhost:7096/contacts'


  getById(contactId: number): Observable<Contact>{
    return this._httpClient.get<Contact>(`${this.apiUrl}/GetById/${contactId}`)
  }

  getAll(): Observable<Contact[]>{
    return this._httpClient.get<Contact[]>(`${this.apiUrl}`)
  }

  post(contact: object){
    return this._httpClient.post<Contact>(`${this.apiUrl}`,contact )
  }

  update(contact: object){
    return this._httpClient.put(`${this.apiUrl}/updateContact`,contact )
  }


  delete(id: number){
    return this._httpClient.delete(`${this.apiUrl}/deleteContact/${id}`)
  }

  deleteEmailById(emailId: number){
    return this._httpClient.delete(`${this.apiUrl}/deleteEmail/${emailId}`)
  }

  deletePhoneById(phoneId: number){
    return this._httpClient.delete(`${this.apiUrl}/deletePhone/${phoneId}`)
  }

}
