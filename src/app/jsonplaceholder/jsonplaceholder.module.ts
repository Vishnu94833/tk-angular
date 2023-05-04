import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { RootComponent } from './components/root.component';
import { JsonplaceholderRoutingModule } from './jsonplaceholder-routing.module';
import { metaReducers, reducers } from './state';
import { PostsEffects } from './state/posts';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    JsonplaceholderRoutingModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class JsonplaceholderModule {}
