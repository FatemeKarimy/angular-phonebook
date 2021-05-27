import { ComponentFixture, TestBed } from '@angular/core/testing';
​
import { AppLayoutComponent } from './app-layout.component';
import {HeaderComponent} from "../header/header.component";
import {MaterialModule} from "../../material/material.module";
import {RouterTestingModule} from "@angular/router/testing";
​
describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;
​
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutComponent, HeaderComponent ],
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([])
      ],
    })
    .compileComponents();
  });
​
  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
​
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});