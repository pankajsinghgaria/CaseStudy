import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-counter',
  templateUrl: './main-counter.component.html',
  styleUrls: ['./main-counter.component.css']
})
export class MainCounterComponent implements OnInit {

  counter = 0;
  interval: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startCountdown = () => {
    if (this.interval === 0) {
      this.interval = setInterval(() => {
        if (this.counter == 0) {
          clearInterval(this.interval);
        } else
          this.counter--;
      }, 1000);
    }
  }

  pauseCountdown = () => {
    clearInterval(this.interval);
    this.interval = 0;
  }
}
