import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { UniversityImpl } from '../design-patterns/abstract-example/university-impl';
import { UniversityInterface } from '../design-patterns/abstract-example/university.interface';
import { JsonFormData } from '../components/dynamic-reactive-form/dynamic-reactive-form.component';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class GlobalService {
  data: any = {
    FirstName: 'Vishnu',
    LastName: 'Kuppan',
    Address: 'Bengaluru',
  };
  university!: UniversityInterface;
  constructor(private httpClient: HttpClient) {}

  saveData() {
    console.table(this.data);
  }

  login() {
    return this.httpClient.post(
      'https://login.salesforce.com/services/oauth2/token',
      {
        grant_type: 'password',
        client_id:
          '3MVG9n_HvETGhr3AazYjvGsJ70HSZv9TqYY81dRsIJyTi7.zPcREMYOSlUCAaSWvjnX8GF3.98xdTuLEGzPSJ',
        client_secret:
          'C747F19398D0897C2196E1CB77FA4DA6B9827372853036FCD1D0C46DC12FB0DE',
        username: 'vishnukuppan1796@gmail.com',
        password: 'Sujatha@9',
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  }

  getJsonPlaceholder() {
    this.university.addCollege('HKBK COLLEGE OF ENGINEERING');
    return this.university.getCollege();
  }

  getDynamicFormData(): Observable<JsonFormData> {
    return this.httpClient.get<JsonFormData>('assets/dynamic-form.json');
  }

  getSymmetricalDifferenceOfArrays(arrA: any[], arrB: any[]) {
    return arrA
      .filter((x) => !arrB.includes(x))
      .concat(arrB.filter((x) => !arrA.includes(x)));
  }

  getArray(): Observable<Array<string>> {
    return of();
  }
}
