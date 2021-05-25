import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatRadioModule } from '@angular/material/radio'
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator'

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSortModule,
  MatPaginatorModule
]
@NgModule({
  declarations: [],
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule { }