import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reward-certificate-error-popup',
  templateUrl: './reward-certificate-error-popup.component.html',
  styleUrls: ['./reward-certificate-error-popup.component.scss'],
})
export class RewardCertificateErrorPopupComponent implements OnInit {
  // subs:Subscription
  constructor() {}

  ngOnInit(): void {
    // this.subs.unsubscribe()
  }

  dispatchOnClick() {
    let data = 'COMPONENT WORKING BEHOND NEXT LEVEL';
    let event = new CustomEvent('loadPopUp', { detail: data });

    window.dispatchEvent(event);
  }
}
