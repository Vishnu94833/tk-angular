import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-photo-dashboard',
  templateUrl: './photo-dashboard.component.html',
  styleUrls: ['./photo-dashboard.component.scss'],
})
export class PhotoDashboardComponent implements OnInit {
  static COMPONENT_CONFIG: Route = {
    path: 'photo',
    component: PhotoDashboardComponent,
    children: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
