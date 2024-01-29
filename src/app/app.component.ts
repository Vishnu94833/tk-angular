import { AfterViewInit, Component, Injector, OnInit, signal } from '@angular/core';
import { Logger } from './service/logger.service';
import { Confirmable } from './decorators/confirmable.decorator';

const log = new Logger('AppComponent');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true
})
export class AppComponent implements OnInit {
  title = signal('Angular 16');

  static injector: Injector;

  constructor(injector: Injector) {
    AppComponent.injector = injector;
  }

  ngOnInit(): void {
    log.debug('ngOnInit');
  }

  // @Confirmable()
  openDialogConfirmable(){
    console.log("Done something")
  }
}
