import { IContact } from './../../../../shared/models/contact.model';
import {Component, Input, OnInit} from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'gnu-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contactGroup: FormGroup
  titleAlert: string = 'This field is required'
  contactRow: any
  constructor(private contactService: ContactService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.contactRow = this.contactService.contactRow
    this.createForm()
    this.setChangeValidate()
  }
  createForm() {

    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.contactGroup = this.formBuilder.group({
      'firstname': [this.contactRow.firstname, Validators.required],
      'lastname': [this.contactRow.lastname, Validators.required],
      'phonenumber': [this.contactRow.phonenumber, Validators.required],
      'email': [this.contactRow.email, [Validators.required, Validators.pattern(emailregex)]],
      'address': [this.contactRow.address],
      'validate': ''
    });
  }
  setChangeValidate() {
    this.contactGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.contactGroup.get('firstname').setValidators([Validators.required, Validators.minLength(3)])
          this.titleAlert = "You need to specify at least 3 characters"
        } else {
          this.contactGroup.get('firstname').setValidators(Validators.required)
        }
        this.contactGroup.get('firstname').updateValueAndValidity()
      }
    )
  }

  async save(): Promise<void> {
    const formValues = this.contactGroup.value
    let contact: IContact = {
      id:'',
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      phonenumber: formValues.phonenumber,
      address: formValues.address,
      email: formValues.email,
    }
    if (!contact) {
      return
    }
    try {
      await this.contactService.save(contact).toPromise()
      this.router.navigate(['contacts'], {})
      console.log('Save successful!')
    } catch (error) {
       console.log('Save error')
    }
  }

  async update(): Promise<void> {
    const formValues = this.contactGroup.value
    let contact: IContact = {
      id: this.contactRow._id,
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      phonenumber: formValues.phonenumber,
      address: formValues.address,
      email: formValues.email,
    }
    if (!contact) {
      return
    }
    try {
      await this.contactService.update(contact).toPromise()
      this.router.navigate(['contacts'], {})
      console.log('Update successful!')
    } catch (error) {
       console.log('Update error')
    }
  }
}