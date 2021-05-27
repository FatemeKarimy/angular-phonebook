import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ContactService } from 'src/app/core/services/contact.service';
import { MaterialModule } from 'src/app/layout/material/material.module';

import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  @Component({ selector: 'gnu-contacts-table', template: '' })
  class ContactsTableStubComponent {}

  const contactService = ({
    getAll: () => of(),
  } as unknown) as ContactService
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent, ContactsTableStubComponent ],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [
        {
          provide: ContactService,
          useValue: contactService,
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});