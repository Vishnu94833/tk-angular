import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';

import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { FormComponent } from './molecules/form/form.component';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    FormComponent,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    DynamicFormsRoutingModule
  ],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class DynamicFormsModule {}
