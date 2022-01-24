import { Component, OnInit } from '@angular/core';
import { interval, NEVER, scan, startWith, switchMap, tap } from 'rxjs';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-main-counter',
  templateUrl: './main-counter.component.html',
  styleUrls: ['./main-counter.component.css']
})
export class MainCounterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.initializeCounter();
  }
  counterSubject = this.counterService.counterSubject;
  counter = 0;

  private initializeCounter() {
    this.counterSubject.pipe(
      // startWith({ pause: true, counterValue: 10 }),
      scan((acc, val) => ({ ...acc, ...val })),
      tap((state) => {
        if(state.pause && state.counterValue===0){
          this.counter = state.counterValue;
        }
      }),
      switchMap((state) => state.pause ? NEVER : interval(1000).pipe(
        tap(val => {
          
          if (state.counterValue == 0)
            this.counterService.resetCounter();
          console.log(state.counterValue);
          this.counter = state.counterValue;
          state.counterValue--;
        })
      ))
    ).subscribe();
  }

}
