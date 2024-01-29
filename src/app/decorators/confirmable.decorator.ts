import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { Decorator } from './decorator';
import { SimpleDialogComponent } from '../components/simple-dialog/simple-dialog.component';
import { AppComponent } from '../app.component';

export interface ConfirmableDecoratorOptions {
  title?: string;
  text?: string;
}

export function Confirmable(test: any): Decorator {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    // @ts-ignore
    const thisInstance = this;
    debugger
    const originalMethod = descriptor.value;
    const config: ConfirmableDecoratorOptions = {
      title: 'Confirmation needed',
      text: 'Are you sure?',
    };
    console.log('DATA FROM COMPONENT_1 :: ', test);
    descriptor.value = async function (...args: any[]) {
      const dialog: MatDialog = AppComponent.injector.get<MatDialog>(MatDialog);
      console.log('DATA FROM COMPONENT_2 :: ', test);
      const dialogRef: MatDialogRef<SimpleDialogComponent> = dialog.open(
        SimpleDialogComponent,
        {
          data: {
            title: config.title,
            text: test,
          },
        }
      );

      dialogRef.afterClosed().subscribe((result) => {
        args = [...args, result];
        return originalMethod.apply(this, args);
      });
    };
    return descriptor;
  };
}
