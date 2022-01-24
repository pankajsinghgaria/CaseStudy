import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  counterSubject: Subject<{ pause?: boolean, counterValue?: number }> = new Subject();
  logging = new Subject();

  // limit = 0;

  start = true;
  clickTimeLog = [];
  pauseCount = 0;
  startCount = 0;

  startPause = (limit) => {
    if (limit === 'reset') {
      this.resetCounter();
    } else if (limit !== '') {

      this.startCounter(limit);
    } else {
      if (this.start) {
        this.startCounter();
      }
      else {
        this.pauseCounter();
      }
    }

  }

  startCounter = (limit?: number) => {
    if (limit || limit === 0)
      this.counterSubject.next({ pause: false, counterValue: limit });
    else
      this.counterSubject.next({ pause: false });
    this.start = false;
    this.clickTimeLog.push('Start clciked at ' + Date());
    this.startCount++;
    this.logging.next({startCount : this.startCount, pauseCount: this.pauseCount, timeLog: this.clickTimeLog});
  }

  pauseCounter = () => {
    this.counterSubject.next({ pause: true });
    this.start = true;
    this.clickTimeLog.push('Pause clciked at ' + Date());
    this.pauseCount++;
    this.logging.next({startCount : this.startCount, pauseCount: this.pauseCount, timeLog: this.clickTimeLog});
  }

  resetCounter = () => {
    this.counterSubject.next({ pause: true, counterValue: 0 });
    this.start = true;
    this.clickTimeLog.push('Reset clciked at ' + Date());
    this.startCount = 0;
    this.pauseCount = 0;
    this.logging.next({startCount : this.startCount, pauseCount: this.pauseCount, timeLog: this.clickTimeLog});
  }
}
