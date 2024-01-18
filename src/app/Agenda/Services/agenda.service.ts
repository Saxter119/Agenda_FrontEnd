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

  getAll(): Observable<Contact[]>{
    return this._httpClient.get<Contact[]>(`${this.apiUrl}`)
  }

  post(contact: Contact){
    return this._httpClient.post<Contact>(`${this.apiUrl}`,contact )
  }

}
