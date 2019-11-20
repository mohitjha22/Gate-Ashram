import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicpracticeComponent } from './topicpractice.component';

describe('TopicpracticeComponent', () => {
  let component: TopicpracticeComponent;
  let fixture: ComponentFixture<TopicpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
