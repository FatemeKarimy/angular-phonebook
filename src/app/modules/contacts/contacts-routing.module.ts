import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { ContactsComponent } from "./components/contacts/contacts.component";

const routes: Routes = [
    {
        path: '',
        component: ContactsComponent,
        data: {
            tabNavId: 'contacts',
        },
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactsRoutingModule {}