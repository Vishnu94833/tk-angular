import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA, NgModule
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { Subform1Component } from './components/reactive-form-example/subform1/subform1.component';
import { UniversityImpl } from './design-patterns/abstract-example/university-impl';
import { UniversityInterface } from './design-patterns/abstract-example/university.interface';
import { MaterialModule } from './material.module';
import { CENumberInput } from './components/ce-number-input/ce-number-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CENumberInput,
    Subform1Component,
    ReactiveFormExampleComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,

  ],
  providers: [DatePipe,
  {provide:UniversityInterface
    ,useClass:UniversityImpl}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
