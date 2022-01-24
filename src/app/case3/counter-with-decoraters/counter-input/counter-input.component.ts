import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  limit: any = 0;
  disableInput = false;
  @Output() startPauseEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  startpause = () => {
    if (!this.disableInput)
      this.startPauseEvent.emit(this.limit);
    else
      this.startPauseEvent.emit('');
    this.disableInput = true;
  }

  reset = () => {
    this.limit = 0;
    this.disableInput = false
    this.startPauseEvent.emit('reset')
  }
}
