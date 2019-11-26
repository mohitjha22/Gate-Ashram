import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YearpracticeService } from './yearpractice.service';

@Component({
  selector: 'app-yearpractice',
  templateUrl: './yearpractice.component.html',
  styleUrls: ['./yearpractice.component.css']
})
export class YearpracticeComponent implements OnInit {

  public questions = [];
  public answers = [];
  public branch;
  public year;
  constructor(private _yearpracticeService: YearpracticeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.branch = this.route.snapshot.params.branch;
    this.year = this.route.snapshot.params.year;
    this._yearpracticeService.getYearquestions(this.branch, this.year)
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
