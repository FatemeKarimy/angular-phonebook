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
  displayedColumns: string[] = ['firstname','lastname','phonenumber','address','email','edit','delete']
  dataSource = new MatTableDataSource()

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  ngOnInit(): void {
    this.subscriptions.add(
      this.contactService.contactsObservable$.subscribe((contacts) => this.handleData(contacts))
    )
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
  handleData(contacts: IContact[]): void {
    this.dataSource.data = contacts
  }

  handleWithDialog(id: any): void {
    if( window.confirm('Are you sure?') ) {
      this.delete(id).then(() => {
        this.contactService.getAll().subscribe((contacts) => this.handleData(contacts))
      })
    }
  }

  async delete(id: any): Promise<void> {
    try {
      await this.contactService.delete(id).toPromise()
      this.router.navigate(['contacts']);
    } catch (error) {
    }
  }

  edit(row : IContact) {
    this.contactService.contactRow = row
    this.router.navigate(['contacts/add-edit']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
