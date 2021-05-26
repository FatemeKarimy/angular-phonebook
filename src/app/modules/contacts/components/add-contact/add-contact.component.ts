import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'gnu-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  update()  {
    console.log('heloo');
    

  }

}
