import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ContactService } from './contact.service';
import {of, throwError} from "rxjs";
import {mockContact1, mockContacts} from "./contact.mock";
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

  describe('When a call to getAll method comes in', () => {
    beforeEach(() => {
      jest.spyOn(httpClient, 'get').mockImplementation(() => throwError('Error'))
      jest.spyOn(service, 'handleError')
    })

    it('should call the api - with error', () => {
      service
        .getAll()
        .toPromise()
        .then((_) => {})
        .catch((_) => {})
      expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/contacts')
      expect(service.handleError).toHaveBeenCalledTimes(0)
    })
  })

  describe('When a call to getAll method comes in', () => {
    beforeEach(() => {
      jest.spyOn(httpClient, 'get').mockImplementation(() => of(mockContacts))
    })
    it('should call the api - with success', () => {
      service.getAll().subscribe()
      expect(httpClient.get).toHaveBeenCalled()
    })
  })

  describe('When a call to delete method comes in', () => {
    it('should call to the delete to the api with the specific contact id', () => {
      const contactId = '1'
      jest.spyOn(httpClient, 'delete').mockImplementation(() => of(contactId))
      service.delete(contactId).subscribe()
      expect(httpClient.delete).toHaveBeenCalledWith(`${baseUrl}/${contactId}`)
    })

    it('should call handleError on api error', () => {
      const contactId = '1'
      jest.spyOn(httpClient, 'delete').mockImplementation(() => throwError('Error'))
      jest.spyOn(service, 'handleError')
      service.delete(contactId).subscribe()
      expect(httpClient.delete).toHaveBeenCalledWith(`${baseUrl}/${contactId}`)
      expect(service.handleError).toHaveBeenCalledTimes(0)
    })
  })

  describe('When a call to save method comes in', () => {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    const mockContactJson = JSON.stringify(mockContact1)

    it('should post to the api with the contact as payload', () => {
      jest.spyOn(httpClient, 'post').mockImplementation(() => of(mockContact1))
      service.save(mockContact1).subscribe()
      expect(httpClient.post).toHaveBeenCalledWith(baseUrl, mockContactJson, {headers: headers})
    })

    it('should call handleError on api error', () => {
      jest.spyOn(httpClient, 'post').mockImplementation(() => throwError('Error'))
      jest.spyOn(service, 'handleError')
      service.save(mockContact1).subscribe()
      expect(httpClient.post).toHaveBeenCalledWith(baseUrl, mockContactJson, {headers: headers})
      expect(service.handleError).toHaveBeenCalled()
    })
  })

  describe('When a call to update method comes in', () => {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    const mockContactJson = JSON.stringify(mockContact1)

    it('should call the put with the contacts and Id as payload', () => {
      const contactId = '1'
      jest.spyOn(httpClient, 'put').mockImplementation(() => of(mockContact1))
      service.update(mockContact1).subscribe()
      expect(httpClient.put).toHaveBeenCalledWith(`${baseUrl}/${contactId}`, mockContactJson, {headers: headers})
    })

    it('should call handleError on api error', () => {
      const contactId = '1'
      jest.spyOn(httpClient, 'put').mockImplementation(() => throwError('Error'))
      jest.spyOn(service, 'handleError')
      service.update(mockContact1).subscribe()
      expect(httpClient.put).toHaveBeenCalledWith(`${baseUrl}/${contactId}`, mockContactJson, {headers: headers})
      expect(service.handleError).toHaveBeenCalled()
    })
  })

});
