import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSettingComponent } from './player-setting.component';

describe('PlayerSettingComponent', () => {
  let component: PlayerSettingComponent;
  let fixture: ComponentFixture<PlayerSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
