import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HouseModel } from 'src/app/models/house.model';
import { BooksModel, IpDataModel, RandomYesOrNo } from 'src/app/models/random.model';
import GotHouseService from 'src/app/services';

@Component({
  selector: 'app-got-houses',
  templateUrl: './got-houses.component.html',
  styleUrls: ['./got-houses.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GotHousesComponent implements OnInit {
  vm: HouseModel = new HouseModel();
  booksList: Array<BooksModel> = new Array<BooksModel>();
  random: RandomYesOrNo = new RandomYesOrNo();

  constructor(private gotHouseService: GotHouseService) { }

  ngOnInit(): void {
    this.gotHouseService.getGotHouses().subscribe((res) => {
      this.booksList = <BooksModel[]>res.data;
    });
    this.gotHouseService.getIpAddressLoc().subscribe((res) => {
      let data: IpDataModel = new IpDataModel()
      data.ip = res.query;
      data.address = res.lat + "::" + res.lon
      data.data = JSON.stringify(res)
      this.gotHouseService.postIpAddress(data).subscribe(res => {
        console.log(res);
      })
    });
  }
}
