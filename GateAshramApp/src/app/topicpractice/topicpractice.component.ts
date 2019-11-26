import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TopicpracticeService } from './topicpractice.service';

@Component({
  selector: 'app-topicpractice',
  templateUrl: './topicpractice.component.html',
  styleUrls: ['./topicpractice.component.css']
})
export class TopicpracticeComponent implements OnInit {

  public questions = [];
  public answers = [];
  public subject;
  public topics;

  constructor(
    private _topicpracticeService: TopicpracticeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('subject');
    this.topics = JSON.parse(this.route.snapshot.paramMap.get('topics'));
    // console.log(this.subject);
    //console.log(this.topics);

    this._topicpracticeService.getTopicquestions(this.subject, this.topics)
      .subscribe((data) => {
        this.questions = data;
        for (let idx = 0; idx < this.questions.length; idx++) {
          this.answers[this.questions[idx]._id] = this.questions[idx].Answer;
        }
      });

  }

  checkAnswer(data) {
    let q_id = data.path[1].id;
    let q_option = data.srcElement.innerText[0];
    let q_option_text = data.srcElement.innerText.slice(1);

    if (this.answers[q_id].length > 1) {
      if (q_option_text === this.answers[q_id]) {
        data.srcElement.style.background = "#008000ad";
      }
      else {
        data.srcElement.style.background = "#fd0000b0";
      }
    }
    else if (this.answers[q_id].length == 1) {
      if (q_option === this.answers[q_id]) {
        data.srcElement.style.background = "#008000ad";
      }
      else {
        data.srcElement.style.background = "#fd0000b0";
      }
    }

    data.path[4].childNodes[1].style.display = "block";
    //console.log(data);

  }

}
