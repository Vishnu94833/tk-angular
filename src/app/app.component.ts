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
    log.debug('ngAfterViewInit',process.env.API_KEY,);
    // let a =this.globalService.getJsonPlaceholder()
    // log.debug("getCollege --> ", a)
  }
  ngOnInit(): void {
    log.debug('ngOnInit');
  }

  // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

solution(A: number[]): number {
  // Implement your solution here
  A = A.filter(x => x >= 1).sort((a, b) => a - b)

  let x = 1

  for(let i = 0; i < A.length; i++) {
      // if we find a smaller number no need to continue, cause the array is sorted
      if(x < A[i]) {
          return x
      }
      x = A[i] + 1
  }

  return x

}

}
