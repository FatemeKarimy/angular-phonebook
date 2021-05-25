import { IContact } from "src/app/shared/models/contact.model";




export const mockContact1 : IContact = {
    id: '1',
    firstname: 'name1',
    lastname: 'lastname1',
    phonenumber: '0176111111',
    address: 'adress1',
    email: 'email1'
}
export const mockContact2 : IContact = {
    id: '2',
    firstname: 'name2',
    lastname: 'lastname2',
    phonenumber: '0176222222',
    address: 'adress2',
    email: 'email2'
}
export const mockContact3 : IContact = {
    id: '3',
    firstname: 'name3',
    lastname: 'lastname3',
    phonenumber: '0176333333',
    address: 'adress3',
    email: 'email3'
}
export const mockContact4 : IContact = {
    id: '4',
    firstname: 'name4',
    lastname: 'lastname4',
    phonenumber: '0176444444',
    address: 'adress4',
    email: 'email4'
}

export const mockContacts : IContact[] = [
    mockContact1,
    mockContact2,
    mockContact3,
    mockContact4
] 

