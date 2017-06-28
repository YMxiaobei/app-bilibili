import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'classify-section',
  templateUrl: './classify-section.component.html',
  styleUrls: ['./classify-section.component.scss']
})
export class ClassifySectionComponent implements OnInit {

  i_rotate_transform: string = "rotate(0deg)";	
  i_arrow_right_right: string = "11px";

  constructor() { }

  ngOnInit() {
  }

}
