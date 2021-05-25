// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ContactsComponent } from './modules/contacts/contacts.component';

// const routes: Routes = [
//   {path: 'contacts', component: ContactsComponent}
// ];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'contacts',
    data: {
      navId: 'contacts'
    },
    loadChildren: () =>
        import('./modules/contacts/contacts.module').then((m) => m.ContactsModule),
  },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: '**', redirectTo: 'contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }