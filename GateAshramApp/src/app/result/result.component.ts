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
  public heading;
  public totalQuestions;
  public totalAttemped1;
  public totalAttemped2;
  public totalCorrect1;
  public totalCorrect2;
  public score;

  ngOnInit() {
    this.resultData = this.route.snapshot.params.resultData;
    this.heading = this.resultData.heading;
    this.totalQuestions = this.resultData.totalQuestions;
    this.totalAttemped1 = this.resultData.totalAttemped.oneMark;
    this.totalAttemped2 = this.resultData.totalAttemped.twoMarks;
    this.totalCorrect1 = this.resultData.totalCorrect.oneMark;
    this.totalCorrect2 = this.resultData.totalCorrect.twoMarks;
    this.score = this.resultData.score;
  }

}
