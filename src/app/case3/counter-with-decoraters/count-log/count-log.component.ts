import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-log',
  templateUrl: './count-log.component.html',
  styleUrls: ['./count-log.component.css']
})
export class CountLogComponent implements OnInit {

  @Input() startCount = 0;
  @Input() pauseCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
