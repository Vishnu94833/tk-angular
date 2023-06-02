import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { RootComponent } from './components/root.component';
import { JsonplaceholderRoutingModule } from './jsonplaceholder-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { PostsEffects } from './state/posts';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    EffectsModule.forRoot([PostsEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
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
