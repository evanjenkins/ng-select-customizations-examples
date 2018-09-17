import { Component, OnInit } from '@angular/core';
import * as listData from './services/data/list.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data: any;

  ngOnInit() {
    this.data = (<any>listData).data;
  }
}
