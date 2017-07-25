import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanmuEditorComponent } from './danmu-editor.component';

describe('DanmuEditorComponent', () => {
  let component: DanmuEditorComponent;
  let fixture: ComponentFixture<DanmuEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanmuEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanmuEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
