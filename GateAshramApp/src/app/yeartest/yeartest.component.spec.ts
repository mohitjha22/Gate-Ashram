import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeartestComponent } from './yeartest.component';

describe('YeartestComponent', () => {
  let component: YeartestComponent;
  let fixture: ComponentFixture<YeartestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeartestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeartestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
