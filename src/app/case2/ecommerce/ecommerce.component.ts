import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class ECommerceComponent implements OnInit {
  itemList: any = [];
  viewClass: string = 'listClass';
  listActive: string = 'active';
  gridActive: string = '';

  constructor() { }

  ngOnInit(): void {
    var createData = function () {
      var item = []
      for (let i = 0; i < 40; i++) {
        item.push({
          name: 'Book ' + (i + 1),
          id: i,
          price: '$' + (i + 1) * 10,
          priceAct: (i + 1) * 10
        })
      }
      return item;
    }
    this.itemList = createData();
  }

  listView = () => {
    this.viewClass = 'listClass';
    this.listActive = 'active';
    this.gridActive = '';
  };

  gridView = () => {
    this.viewClass = 'gridClass';
    this.listActive = '';
    this.gridActive = 'active';
  }

  sort = (type: string) => {
    if (type === 'h2l') {
      this.itemList = this.itemList.sort((low: any, high: any) => high.priceAct - low.priceAct);
    } else if (type === 'l2h') {
      this.itemList = this.itemList.sort((low: any, high: any) => low.priceAct - high.priceAct);
    }
  }
}
