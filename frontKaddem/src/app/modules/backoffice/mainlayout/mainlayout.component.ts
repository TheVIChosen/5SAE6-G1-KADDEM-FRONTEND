import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css'],
})
export class MainlayoutComponent implements OnInit {
  logout() {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  ngOnInit() {}
}
