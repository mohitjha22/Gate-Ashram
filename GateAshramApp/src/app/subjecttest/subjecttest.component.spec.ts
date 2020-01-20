import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjecttestComponent } from './subjecttest.component';

describe('SubjecttestComponent', () => {
  let component: SubjecttestComponent;
  let fixture: ComponentFixture<SubjecttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjecttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjecttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
