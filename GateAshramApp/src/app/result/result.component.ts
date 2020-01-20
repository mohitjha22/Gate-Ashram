import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  public resultData;
  public testDetails;

  public heading;
  public totalQuestions;
  public totalAttempted1;
  public totalAttempted2;
  public totalCorrect1;
  public totalCorrect2;
  public score;

  ngOnInit() {
    this.resultData = JSON.parse(this.route.snapshot.params.resultData);
    this.testDetails = JSON.parse(this.route.snapshot.params.testDetails);

    //console.log(this.resultData);
    //console.log(this.testDetails[0]);

    this.heading = this.resultData.heading;
    this.totalQuestions = this.resultData.totalQuestions;
    this.totalAttempted1 = this.resultData.totalAttempted.oneMark;
    this.totalAttempted2 = this.resultData.totalAttempted.twoMarks;
    this.totalCorrect1 = this.resultData.totalCorrect.oneMark;
    this.totalCorrect2 = this.resultData.totalCorrect.twoMarks;
    this.score = this.resultData.score;
  }

}
