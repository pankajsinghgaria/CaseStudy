import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-count-log',
  templateUrl: './count-log.component.html',
  styleUrls: ['./count-log.component.css']
})
export class CountLogComponent implements OnInit {

  constructor(private counterService : CounterService) { }

  startCount = 0;
  pauseCount = 0;

  ngOnInit(): void {
    this.counterService.logging.subscribe((data:any)=>{
      this.startCount = data.startCount;
      this.pauseCount = data.pauseCount;
    })
  }

}
