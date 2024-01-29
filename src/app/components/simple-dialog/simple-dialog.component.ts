import { Component, Inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export type DialogData = {
  title: string;
  text: string;
};

@Component({
  selector: 'app-simple-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
      {{ data.text }}
    </div>
    <div mat-dialog-actions>
      <button [mat-dialog-close]="false" mat-button>Cancel</button>
      <button [mat-dialog-close]="true" mat-button>Ok</button>
    </div>
  `,
})
export class SimpleDialogComponent {
  static injector: Injector;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, injector: Injector) {
    SimpleDialogComponent.injector = injector;
  }


}