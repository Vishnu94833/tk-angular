import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { RootComponent } from './components/root.component';
import { JsonplaceholderRoutingModule } from './jsonplaceholder-routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [CommonModule, JsonplaceholderRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class JsonplaceholderModule {}
