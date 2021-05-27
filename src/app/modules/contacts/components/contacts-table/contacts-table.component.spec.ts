import { MaterialModule } from './../../../../layout/material/material.module';
import { ContactService } from './../../../../core/services/contact.service';
import { IContact } from './../../../../shared/models/contact.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { ContactsTableComponent } from './contacts-table.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ContactsTableComponent', () => {
  let component: ContactsTableComponent;
  let fixture: ComponentFixture<ContactsTableComponent>;
  let router: Router

  const contactsSubject$ = new Subject<IContact[]>()
  const contactService = ({
    delete: jest.fn(),
    getAll: () => of(),
    contactsObservable$: contactsSubject$.asObservable(),
  } as unknown) as ContactService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsTableComponent ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: ContactService,
          useValue: contactService
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router)
    fixture = TestBed.createComponent(ContactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});