import { LayoutModule } from './../../layout/layout.module';
import { SharedModule } from './../../shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsTableComponent,
    AddContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class ContactsModule { }
