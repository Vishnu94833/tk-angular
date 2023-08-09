import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { Logger } from './service/logger.service';


const log = new Logger('AppComponent');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = signal("Angular 16")

  ngAfterViewInit() {
    log.debug('ngAfterViewInit');
    // let a =this.globalService.getJsonPlaceholder()
    // log.debug("getCollege --> ", a)
  }
  ngOnInit(): void {
    log.debug('ngOnInit');
  }
}
