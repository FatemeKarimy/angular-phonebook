import { Router } from '@angular/router';
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
  constructor(private contactService: ContactService,private router: Router) {}
  displayedColumns: string[] = ['firstname','lastname','address','email','edit','delete']
  dataSource = new MatTableDataSource()

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  ngOnInit(): void {
    this.subscriptions.add(
      this.contactService.contactsObservable$.subscribe((contacts) => this.handleData(contacts))
    )
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
  handleData(contacts: IContact[]): void {
    
    this.dataSource.data = contacts
  }

  async delete(id: any): Promise<void> {
    try {
      await this.contactService.delete(id).toPromise()
    } catch (error) {
    }
  }
  edit(row : IContact) {
    this.contactService.contactRow = row 
    this.router.navigate(['contacts/add-edit']);
  }
}