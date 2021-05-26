import { HttpClient } from '@angular/common/http';
import { IContact } from './../../shared/models/contact.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    private baseUrl: string 


    private contacts: IContact[] = []
    private contactsSubject$ = new BehaviorSubject(this.contacts)
    public contactsObservable$ = this.contactsSubject$.asObservable() 

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://localhost:3000/contacts'
  }

 getAll(): Observable<IContact[]> {
   return this.httpClient.get<IContact[]>(this.baseUrl).pipe(
     tap((contacts) => {
        this.contacts = contacts;
        this.contactsSubject$.next(contacts)
     })
   )
 }
 delete(contactId: string): Observable<any> {
  return this.httpClient.delete<any>(`${this.baseUrl}/${contactId}`)
}
 
}
