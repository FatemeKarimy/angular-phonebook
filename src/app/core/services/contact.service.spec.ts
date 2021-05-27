import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockContacts } from './contact.mock';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  const baseUrl = 'http://localhost:3000/contacts'

  const httpClient = ({
    get: () => of(mockContacts),
    post: () => of({}),
  } as unknown) as HttpClient

  beforeEach(() => {
    service = new ContactService(httpClient)
    jest.restoreAllMocks()
  })
​
  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
