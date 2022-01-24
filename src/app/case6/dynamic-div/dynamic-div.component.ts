import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit {

  divArr = [1, 2, 3];
  name: string;

  isBottom = false;
  count = 0;

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.isBottom = true;
      this.count++;
    } else {
      this.isBottom = false;
      this.count = 0;
    }
    this.increaseDiv();
  }

  constructor() { }

  increaseDiv = () => {
    if (this.isBottom && this.count === 1) {
      var k = this.divArr.length;
      for (var i = k + 1; i < k + 3; i++) {
        this.divArr.push(i)
      }
    }
  }

  ngOnInit(): void {
  }

  alertDisp = (num) => {
    alert('Button ' + num + ' is clicked')
  }
}
