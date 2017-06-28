import { Component, OnInit, Input } from '@angular/core';

import { getMockDatas } from './mockData'

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  @Input() datas: any = getMockDatas();

  active: any;

  constructor() { }

  ngOnInit() {
  }

}
