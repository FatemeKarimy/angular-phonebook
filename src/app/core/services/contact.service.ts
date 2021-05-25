import { HttpClient } from '@angular/common/http';
import { IContact } from './../../shared/models/contact.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mockContacts } from './contact.mock';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    private baseUrl: string 


    private contacts: IContact[] = []
    private contactsSubject$ = new BehaviorSubject(this.contacts)
    private contactsobservable$ = this.contactsSubject$.asObservable() 

  constructor(private httpclient: HttpClient) { 
    this.baseUrl = 'http://localhost:3000/contacts'
  }

 getAll(): Observable<IContact[]> {
   return this.httpclient.get<IContact[]>(this.baseUrl).pipe(
     tap((contacts) => {
        this.contacts = contacts;
        this.contactsSubject$.next(contacts)
     })
   )

 }

}
