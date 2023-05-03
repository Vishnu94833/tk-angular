import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicReactiveFormRoutingModule } from './dynamic-reactive-form-routing.module';
import { DynamicReactiveFormComponent } from './dynamic-reactive-form.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicReactiveFormComponent, FormComponentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicReactiveFormRoutingModule,
  ],
})
export class DynamicReactiveFormModule {}
