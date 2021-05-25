import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactsTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
