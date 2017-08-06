import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-player-setting2',
  templateUrl: './player-setting2.component.html',
  styleUrls: ['./player-setting2.component.scss']
})
export class PlayerSetting2Component implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter (); 	
  @Output() setting: EventEmitter<any> = new EventEmitter ();

  default_setting: any = {
  	opacity: 1,
  	speed: 1,
  	density: 1,
  	zoom: 1,
  	playSpeed: 1,
  	fontStyle: "黑体",
  	defaultSrc: 'super'
  }

  _setting: any = {
  	opacity: 1,
  	speed: 1,
  	density: 1,
  	zoom: 1,
  	playSpeed: 1,
  	fontStyle: "黑体",
  	defaultSrc: 'super'
  };

  constructor() { }

  setOpacity ( value ) {
    let opacity = value * 2 / 100;

    this._setting.opacity = opacity;
    this.setting.emit ( this._setting );
  }

  setSpeed ( value ) {
  	let speed = value * 2 / 100;

  	this._setting.speed = speed;
  	this.setting.emit ( this._setting );
  }

  setSensity ( value ) {
  	let density = value * 2 / 100;

  	this._setting.desity = density;
  	this.setting.emit ( this._setting );
  }

  setFontZoom ( value ) {
  	let zoom = value * 2 / 100;

  	this._setting.zoom = zoom;
  	this.setting.emit ( this._setting );
  }

  setFontFamily ( value ) {
  	this._setting.fontStyle = value;
  	this.setting.emit ( this._setting );
  }

  setPlaySpeed ( value ) {
  	this._setting.playSpeed = value;
  	this.setting.emit ( this._setting );
  }

  setDefaultSrc ( value ) {
  	this._setting.defaultSrc = value;
  	this.setting.emit ( this._setting );
  }

  reset () {
    this._setting = this.default_setting;

    this.setting.emit ( this._setting );
  }

  ngOnInit() {
  }

}
