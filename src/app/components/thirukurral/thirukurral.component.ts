import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { BaseClass, ComponentConfig } from 'src/app/services/base';
import { DataService } from 'src/app/services/data.service';

class ThirukkuralModel {
  chap_eng: string = '';
  chap_tam: string = '';
  chapgrp_eng: string = '';
  chapgrp_tam: string = '';
  eng: string = '';
  eng_exp: string = '';
  line1: string = '';
  line2: string = '';
  id: number | undefined;
  sect_eng: string = '';
  sect_tam: string = '';
  tam_exp: string = '';
}

@Component({
  selector: 'app-thirukurral',
  templateUrl: './thirukurral.component.html',
  styleUrls: ['./thirukurral.component.scss'],
})
export class ThirukurralComponent implements OnInit {
  static COMPONENT_CONFIG: Route = {
    path: '',
    component: ThirukurralComponent,
    children: [],
  };

  vm: ThirukkuralModel = new ThirukkuralModel();
  isLoaded: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getThirukkural();

    setInterval(() => {
      this.getThirukkural();
    }, 60000);

    // this.loadAllComponents();
  }

  getThirukkural() {
    this.dataService
      .getDailyData(this.getRandomInt(1, 1000))
      .subscribe((res) => {
        this.vm = res as ThirukkuralModel;
        // console.table(this.vm);
      });
    this.dataService.getRandomPublicApi().subscribe((res: any) => {
      // console.table(typeof ThirukurralComponent);
    });
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
