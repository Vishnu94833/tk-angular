import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/core.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects, reducer } from './state/posts';
import { MaterialModule } from 'src/app/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature([PostsEffects]),
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    // }),
    // EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
    PostsRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsModule {}
