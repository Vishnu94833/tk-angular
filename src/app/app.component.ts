import { Component, OnInit } from '@angular/core';
import GotHouseService from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'angular-dev';
  ariaLabel = "ManualGroupIdStartRange=1;ManualGroupIdEndRange=11;SPOPOCreateDateUpdateNote=Note displayed on SPO PO Create Date Popup;LocationPOEdit=Feature flag controlling if Location & PO Information popup is enabled for an organization;InvalidLocationError=Error message displayed in Update Location & PO Information popup if an invalid location is input.;NoSupplyFoundError=Error message displayed in Update Location & PO Information popup if a supply record is not found for the input values.;InvalidSupplyFoundError=Error message displayed in Update Location & PO Information popup if the supply record for the input values does not match the order line ItemId."

  constructor(private getService: GotHouseService) { }

  ngOnInit(): void {
    let list = this.ariaLabel.split(';');

    list.forEach(e => {
      let mewList = e.split('=');
      // console.log({ "KEY": mewList[0], "VALUE": mewList[1] });
      this.getService.configStoreData = {
        ...this.getService.configStoreData,
        [mewList[0]]: mewList[1]
      }
    })

  }
}

// service.ts
