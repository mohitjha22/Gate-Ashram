import { Component, OnInit } from '@angular/core';
import { TopicpracticeService } from './topicpractice.service';

@Component({
  selector: 'app-topicpractice',
  templateUrl: './topicpractice.component.html',
  styleUrls: ['./topicpractice.component.css']
})
export class TopicpracticeComponent implements OnInit {

  public questions = [];

  constructor(private _topicpracticeService: TopicpracticeService) { }

  ngOnInit() {
    this._topicpracticeService.getTopicquestions()
        .subscribe((data) => this.questions = data);
  }

}
