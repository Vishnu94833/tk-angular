import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
