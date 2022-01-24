import { Component, OnInit, ViewChild } from '@angular/core';
import { MainCounterComponent } from './main-counter/main-counter.component';

@Component({
  selector: 'app-counter-with-decoraters',
  templateUrl: './counter-with-decoraters.component.html',
  styleUrls: ['./counter-with-decoraters.component.css']
})
export class CounterWithDecoratersComponent implements OnInit {

  @ViewChild(MainCounterComponent) private myChild: MainCounterComponent;
  start = true;
  clickTimeLog = [];
  pauseCount = 0;
  startCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startPause = (limit) => {
    if (limit === 'reset') {
      this.resetClicked();
    } else if (limit !== '') {
      this.myChild.counter = limit;
      this.startClicked();
    } else {
      if (this.start) {
        this.startClicked();
      }
      else {
        this.pauseClicked();
      }
    }

  }

  startClicked = ()=>{
    this.myChild.startCountdown();
    this.start = false;
    this.clickTimeLog.push('Start clciked at ' + Date());
    this.startCount++;
  }
  pauseClicked = ()=>{
    this.myChild.pauseCountdown();
    this.start = true;
    this.clickTimeLog.push('Pause clciked at ' + Date());
    this.pauseCount++
  }

  resetClicked = ()=>{
    this.myChild.counter = 0;
    this.myChild.pauseCountdown();
    this.start = true;
    this.clickTimeLog.push('Reset clciked at ' + Date());
    this.startCount = 0;
    this.pauseCount = 0;
  }
}
