import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './component/app-layout/app-layout.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
],
  exports: [
      AppLayoutComponent
  ]
})
export class LayoutModule {
  constructor() {}
}

