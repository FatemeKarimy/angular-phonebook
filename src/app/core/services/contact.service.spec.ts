import { HttpClient } from '@angular/common/http';
import { ContactService } from './contact.service';
import {of} from "rxjs";
describe('ContactService', () => {
  let service: ContactService;
  const baseUrl = 'http://localhost:3000/contacts'

  const httpClient = ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  } as unknown) as HttpClient

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(httpClient, 'get').mockImplementation(() => of())
    service = new ContactService(httpClient)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
});