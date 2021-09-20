import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GotHousesComponent } from './got-houses.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [GotHousesComponent],
  imports: [CommonModule, MatCardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GotHousesModule {}
