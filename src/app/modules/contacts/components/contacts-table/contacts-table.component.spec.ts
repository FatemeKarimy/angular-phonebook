import { MaterialModule } from './../../../../layout/material/material.module';
import { ContactService } from './../../../../core/services/contact.service';
import { IContact } from './../../../../shared/models/contact.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject, Observable } from 'rxjs';

import { ContactsTableComponent } from './contacts-table.component';
import { of } from 'rxjs';

describe('ContactsTableComponent', () => {
  let component: ContactsTableComponent;
  let fixture: ComponentFixture<ContactsTableComponent>;

  const contactsSubject$ = new Subject<IContact[]>()
  const contactService = {
    contactsObservable$: contactsSubject$.asObservable(),
    getAll: () => of(),
  } as ContactService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsTableComponent ],
      imports: [MaterialModule],
      providers: [
        {
          provide: contactService,
          useValue: contactService
        },
      ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
