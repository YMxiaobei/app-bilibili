import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSetting2Component } from './player-setting2.component';

describe('PlayerSetting2Component', () => {
  let component: PlayerSetting2Component;
  let fixture: ComponentFixture<PlayerSetting2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSetting2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSetting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
