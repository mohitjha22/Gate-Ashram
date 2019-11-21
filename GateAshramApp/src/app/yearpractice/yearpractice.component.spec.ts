import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearpracticeComponent } from './yearpractice.component';

describe('YearpracticeComponent', () => {
  let component: YearpracticeComponent;
  let fixture: ComponentFixture<YearpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
