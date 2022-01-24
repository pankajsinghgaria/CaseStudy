import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.css']
})
export class TimerLogComponent implements OnInit {

  constructor(private counterService : CounterService) { }

  logs = []

  ngOnInit(): void {
    this.counterService.logging.subscribe((data:any)=>{
      this.logs = data.timeLog;
    })
  }

}
