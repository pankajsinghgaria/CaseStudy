import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.css']
})
export class TimerLogComponent implements OnInit {

  @Input() logs = [];

  constructor() { }

  ngOnInit(): void {
  }

}
