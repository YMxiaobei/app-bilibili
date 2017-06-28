import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeMoreComponent } from './contribute-more.component';

describe('ContributeMoreComponent', () => {
  let component: ContributeMoreComponent;
  let fixture: ComponentFixture<ContributeMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
