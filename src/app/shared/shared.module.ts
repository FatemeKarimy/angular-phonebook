import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
const SHARED_MODULES = [
  FormsModule,
  ReactiveFormsModule
]
@NgModule({
  declarations: [],
  imports: [
    ...SHARED_MODULES,
    CommonModule,
    LayoutModule
  ],
  exports: [...SHARED_MODULES],
})
export class SharedModule { }