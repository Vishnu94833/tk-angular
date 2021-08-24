import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe1',
  templateUrl: './iframe1.component.html',
  styleUrls: ['./iframe1.component.scss'],
})
export class Iframe1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('loadPopUp', (e) => {
      console.log(e);
    });
  }
}
