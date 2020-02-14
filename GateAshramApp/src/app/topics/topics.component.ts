import { Component, OnInit } from '@angular/core';
import { TopicsService } from './topics.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  public topics = [];
  public subject;
  public submitDisabled = true;
  public selectedTopics = {};

  constructor(
    private router: Router,
    private _topicsService: TopicsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subject = this.route.snapshot.params.subject;

    this._topicsService.getTopics(this.subject)
      .subscribe((data) => this.topics = data);

  }

  onClickSubmit(data) {
    //console.log(data);
    this.selectedTopics["subject"] = this.subject;
    this.selectedTopics['topics'] = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if(element === true) {
          this.selectedTopics['topics'].push([key]);
        }
      }
    }

    //console.log(this.selectedTopics);

    if(data.testType=="Practice"){
      this.router.navigate(["/topicpractice", { topics: JSON.stringify(this.selectedTopics) }]);
    }
    else if(data.testType=="Test"){
      this.router.navigate(["/topictest", { topics: JSON.stringify(this.selectedTopics) }]);
    }

    //alert("Entered Email id : " + this.selectedYear);
  }


}
