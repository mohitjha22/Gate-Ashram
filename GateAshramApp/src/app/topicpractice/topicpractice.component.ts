import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { TopicpracticeService } from './topicpractice.service';

@Component({
  selector: 'app-topicpractice',
  templateUrl: './topicpractice.component.html',
  styleUrls: ['./topicpractice.component.css']
})
export class TopicpracticeComponent implements OnInit {

  public questions = [];
  public subject;
  public topics;

  constructor(
      private _topicpracticeService: TopicpracticeService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('subject');
    this.topics=JSON.parse(this.route.snapshot.paramMap.get('topics'));
    // console.log(this.subject);
    //console.log(this.topics);

    this._topicpracticeService.getTopicquestions(this.subject,this.topics)
      .subscribe((data) => this.questions=data);
      
  }

}
