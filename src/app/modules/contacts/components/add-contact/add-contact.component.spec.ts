import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddContactComponent } from './add-contact.component';
import {MaterialModule} from "../../../../layout/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";
import {ContactService} from "../../../../core/services/contact.service";
import {of} from "rxjs";

describe('AddContactComponent', () => {
  let component: AddContactComponent
  let fixture: ComponentFixture<AddContactComponent>

  const contactService = ({
    update: () => of(),
    save: () => of(),
  } as unknown) as ContactService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactComponent ],
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
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});