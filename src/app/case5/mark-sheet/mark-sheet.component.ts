import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mark-sheet',
  templateUrl: './mark-sheet.component.html',
  styleUrls: ['./mark-sheet.component.css']
})
export class MarkSheetComponent implements OnInit {

  origStudents = []
  students = [];

  colName = '';
  count = 0; // 1 is ascending, 2 is descending & 3 is reset

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('./assets/marksheet.json').subscribe((data) => {
      this.origStudents = data.students;
      this.students = [...this.origStudents];
    });
  }

  sortTable = (column) => {
    if (column !== this.colName) {
      this.colName = column;
      this.count = 1; //click 1
    } else {
      this.count++; //click 2
    }

    if (this.count === 3) { //reseting
      this.count = 0;
      this.students = [...this.origStudents];
    }
    else if (column === 'name' || column === 'section') {
      this.students.sort((a, b) => {
        let fa = a[column].toLowerCase(),
          fb = b[column].toLowerCase();

        if (fa < fb && this.count == 1) {
          return -1;
        }
        if (fa > fb && this.count == 1) {
          return 1;
        }
        if (fa < fb && this.count == 2) {
          return 1;
        }
        if (fa > fb && this.count == 2) {
          return -1;
        }
        return 0;
      });
    }
    else if (column === 'class' || column === 'sub1' || column === 'sub2' || column === 'sub3') {
      if (this.count === 1) {
        this.students.sort((a, b) => {
          return a[column] - b[column];
        });
      } else if (this.count === 2) {
        this.students.sort((a, b) => {
          return b[column] - a[column];
        });
      }
    }
  }
}
