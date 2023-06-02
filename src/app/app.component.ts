import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GlobalService } from './service/global.service';
import { Logger } from './service/logger.service';
import { InjectService } from './service/custom-decorator';

class FieldsModel {
  returnType:string='';
  condition:string='';
  reason:string='';
  quantity:string='';
}

const log = new Logger('AppComponent');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  actions = [
    {
      value: 'Return',
      label: 'Return',
    },
  ];

  vm: FieldsModel = new FieldsModel();

  // @InjectService(GlobalService)
  // globalService!: GlobalService

  // constructor(private globalService: GlobalService) {}

  ngAfterViewInit() {
    // log.debug('ngAfterViewInit');
    // let a =this.globalService.getJsonPlaceholder()
    // log.debug("getCollege --> ", a)
  }
  ngOnInit(): void {
    log.debug('ngOnInit');
    // log.info(this.globalService.getJsonPlaceholder())
  }
}
