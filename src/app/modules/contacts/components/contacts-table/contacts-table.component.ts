
import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IContact } from './../../../../shared/models/contact.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ContactService } from './../../../../core/services/contact.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'gnu-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit , AfterViewInit , OnDestroy {

  private subscriptions = new Subscription()
  constructor(private contactService: ContactService) {}
  displayedColumns: string[] = ['firstname','lastname','address','email'] 
  dataSource = new MatTableDataSource()

  // @ViewChild(MatSort) sort: MatSort
  // @ViewChild(MatPaginator) paginator: MatPaginator

  ngOnInit(): void {
    this.subscriptions.add(
      this.contactService.contactsObservable$.subscribe((contacts) => this.handleData(contacts))
    )
  }
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
  handleData(contacts: IContact[]): void {
    this.dataSource.data = contacts
  }

}