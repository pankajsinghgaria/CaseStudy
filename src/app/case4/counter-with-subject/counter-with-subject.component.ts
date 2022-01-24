import { Component, OnInit } from '@angular/core';
import { map, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-counter-with-subject',
  templateUrl: './counter-with-subject.component.html',
  styleUrls: ['./counter-with-subject.component.css']
})
export class CounterWithSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  start = 10;
  countDown = timer(0, 1000).pipe(
    map(i => this.start - i),
    takeWhile(i => i >= 0),
    tap(s => console.log(s))
  ).subscribe();

}
