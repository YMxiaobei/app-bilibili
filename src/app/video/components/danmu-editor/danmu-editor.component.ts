import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danmu-editor',
  templateUrl: './danmu-editor.component.html',
  styleUrls: ['./danmu-editor.component.scss']
})
export class DanmuEditorComponent implements OnInit {

  size: string = "small";
  type: string = "scroll";	
  show: any = null;	

  constructor() { }

  ngOnInit() {
  }

}
