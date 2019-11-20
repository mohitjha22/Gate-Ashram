import { Component, OnInit } from '@angular/core';
import { TopicsService } from './topics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  public topics = [];
  public subject;
  constructor(private _topicsService: TopicsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.subject = this.route.snapshot.params.subject;

    this._topicsService.getTopics(this.subject)
        .subscribe((data) => this.topics = data);
  }

}
