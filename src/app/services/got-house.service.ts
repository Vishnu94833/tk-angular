import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from '../core/contants';
import { HouseModel } from '../models/house.model';
import { IpDataModel } from '../models/random.model';

@Injectable({
  providedIn: 'root',
})
export class GotHouseService {
  constructor(private http: HttpClient) { }

  getGotHouses(): Observable<Array<HouseModel>> {
    return this.http.get<HouseModel[]>(Constants.HOUSES);
  }

  generateRandomYesOrNo() {
    return this.http.get('https://yesno.wtf/api');
  }

  getIpAddressLoc(): Observable<any> {
    return this.http.get('https://extreme-ip-lookup.com/json/')
  }

  postIpAddress(data: IpDataModel) {
    return this.http.post(Constants.URI_ADDR, data)
  }
}
