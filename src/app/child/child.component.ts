import { Component, OnInit } from '@angular/core';

@Component({
  // để tiếp đầu ngũ là app-*  sau này search ở html dễ dàng hơn
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  numberOfClick: number = 0;
  constructor() {}

  ngOnInit() {}

  // gọi hàm này từ Parent html
  countClick() {
    this.numberOfClick++;
  }
}
