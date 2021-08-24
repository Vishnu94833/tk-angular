import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
export class Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export class Address {
  Email?: string;
  FirstName?: string;
  State?: string;
  Phone?: string;
  Address2?: string;
  Address3?: string;
  Country?: string;
  PostalCode?: string;
  LastName?: string;
  Address1?: string;
  City?: string;
  County?: string;
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  fetchAllData(): Observable<any> {
    return this.http.get<any>('assets/order.json');
  }

  getAddress(res: any): Address {
    let addressData: Address = new Address();
    res.forEach((e: any) => {
      addressData = e.ShipToAddress.Address as Address;
    });

    return addressData as Address;
  }
  getCountries(): Observable<any> {
    return this.http.get<any>('assets/countries.json');
  }
  getDefaultConfig() {
    return this.http.get<any>('assets/defaultConfig.json');
  }

  getErrorBeeceptor() {
    let body = {};
    let URl =
      'https://valuelink-errorpopup.free.beeceptor.com/customerengagementfacade/api/customerengagementfacade/payment/paymentheader/save';
    return this.http.post(URl, body);
  }

  getConfigStorebyId(): Observable<any> {
    return this.http
      .get<any>('assets/configstore-pdmethods.json')
      .pipe(map((response) => this.extractData(response)));
  }

  getDailyData(id: number) {
    return this.http.get(`https://api-thirukkural.vercel.app/api?num=${id}`);
  }

  getVedic(wordName: string) {
    return this.http.get(
      `https://api-vs.herokuapp.com/vs/v1//resources?word=${wordName}`
    );
  }

  getRandomPublicApi() {
    return this.http.get(`https://api.publicapis.org/random`);
  }

  extractData(response: Response) {
    if (response.status < 200 || response.status >= 300) {
    } else {
      if (response) {
        const body = response;
        // @ts-ignore
        if (body && body.data) {
          // @ts-ignore
          return body.data;
        }
        return body || {};
      } else {
        return {};
      }
    }
  }
}
