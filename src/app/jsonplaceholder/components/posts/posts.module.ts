import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { PostsComponent } from './posts.component';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PostsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsModule { }
