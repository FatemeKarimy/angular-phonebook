import { ContactService } from './../../../../core/services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gnu-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAll().subscribe();
  }

}


