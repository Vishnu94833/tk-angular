import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { metaReducers, reducers } from './state';
import { PostsEffects } from './state/posts';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    // FlexLayoutModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    PostsRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsModule {}
