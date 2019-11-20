import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectpracticeComponent } from './subjectpractice.component';

describe('SubjectpracticeComponent', () => {
  let component: SubjectpracticeComponent;
  let fixture: ComponentFixture<SubjectpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
