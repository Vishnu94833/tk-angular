import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GlobalService } from './service/global.service';
import { Logger } from './service/logger.service';

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

  constructor(private globalService: GlobalService) {}

  ngAfterViewInit() {
    log.debug('ngAfterViewInit');
    // let a =this.globalService.getJsonPlaceholder()
    // log.debug("getCollege --> ", a)
  }
  ngOnInit(): void {
    log.debug('ngOnInit');
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    log.debug('drop', event);
    log.debug('drop --> done ', this.done);
    log.debug('drop --> todo ', this.todo);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // returnPayload: any;
  returnPayloadMap: Map<any, any> = new Map<any, any>();

  actionChange(i: any, event: any) {
    console.log(i);
    console.log(event);
    let returnPayload = {};
    returnPayload = {
      ...returnPayload,
      ReturnTypeSelected: event.value,
    };
    this.returnPayloadMap.set(i, returnPayload);

    console.log(this.vm);
  }

  reasonChange(i: any, event: any) {
    console.log(i);
    console.log(event);
    let returnPayload = {};
    returnPayload = {
      ...returnPayload,
      ReasonSelected: event.value,
    };
    this.returnPayloadMap.set(i, returnPayload);
    console.log(this.vm);
  }

  conditionChange(i: any, event: any) {
    console.log(i);
    console.log(event);
    let returnPayload = {};
    returnPayload = {
      ...returnPayload,
      ConditionSelected: event.value,
    };
    this.returnPayloadMap.set(i, returnPayload);
    console.log(this.vm);
  }

  quantityChange(i: any, event: any) {
    console.log(i);
    console.log(event);
    let returnPayload = {};
    returnPayload = {
      ...returnPayload,
      QuantitySelected: event.value,
    };
    this.returnPayloadMap.set(i, returnPayload);
    console.log(this.vm);
  }

  updateQuantity(quantity:any) {
    console.log(quantity);
    
  }
}
