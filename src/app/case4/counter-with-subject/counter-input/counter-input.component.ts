import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  constructor(private counterService : CounterService) { }

  limit: any = 0;
  disableInput = false;

  ngOnInit(): void {
  }

  startpause = () => {
    if (!this.disableInput){
      this.counterService.startPause(this.limit);
    }
    else{
      this.counterService.startPause('');
    }
    this.disableInput = true;
  }

  reset = () => {
    this.limit = 0;
    this.disableInput = false;
    this.counterService.startPause('reset');
  }

}
