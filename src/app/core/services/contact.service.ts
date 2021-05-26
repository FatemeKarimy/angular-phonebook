import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { IContact } from './../../shared/models/contact.model';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
    private baseUrl: string
    private contacts: IContact[] = []
    private contactsSubject$ = new BehaviorSubject(this.contacts)
    public contactsObservable$ = this.contactsSubject$.asObservable()
    public contactRow : IContact
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
  save(contact: IContact): Observable<IContact> {
    const contactJson = JSON.stringify(contact)
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<IContact>(this.baseUrl, contactJson, {headers: headers}).pipe(catchError(this.handleError))
  }
    
  update(contact: IContact): Observable<IContact> {
    const contactJson = JSON.stringify(contact)
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient
      .put<IContact>(`${this.baseUrl}/${contact.id}`, contactJson)
      .pipe(catchError(this.handleError))
  }

  delete(contactId: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${contactId}`)
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error)
  }
}