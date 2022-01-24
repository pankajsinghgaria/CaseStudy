import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, NEVER, scan, startWith, Subject, switchMap, tap } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-with-subject',
  templateUrl: './counter-with-subject.component.html',
  styleUrls: ['./counter-with-subject.component.css']
})
export class CounterWithSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
