import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YeartestService } from './yeartest.service';

@Component({
  selector: 'app-yeartest',
  templateUrl: './yeartest.component.html',
  styleUrls: ['./yeartest.component.css']
})
export class YeartestComponent implements OnInit {

  public questions = [];
  public stateMap = ['grey', 'red', 'green', 'purple', 'blue'];
  public saveState = [];
  public current_question = [];
  public branch;
  public year;

  constructor(
    private _yeartestService: YeartestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.year = "2001";
    this.branch = "CSE";

    this._yeartestService.getTestQuestions(this.year, this.branch).
      subscribe((data) => {
        this.questions = data;
        console.log(data);
        for (let i = 0; i < this.questions.length; i++) {
          var obj = {
            "id": i,
            "question": this.questions[i],
            "isChecked": false,
            "checked_A": false,
            "checked_B": false,
            "checked_C": false,
            "checked_D": false,
            "state": 0
          };

          this.saveState[i] = obj;
        }

        this.current_question[0] = this.saveState[0];
        console.log(this.current_question);
        this.startTimer();
      });

  }

  startTimer() {

    var pres = new Date().getTime();
    var countDownDate = pres + 15000;

    var x = setInterval(function () {

      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        //alert("Test has ended!");
        //callback();
      }
    }, 1000);
    
  }

  setAnswer(e) {
    if (e.target.checked) {
      this.current_question[0].isChecked = true;
      this.current_question[0].state = 2;
      if (e.target.id === "A") {
        this.current_question[0].checked_A = true;
        this.current_question[0].checked_B = false;
        this.current_question[0].checked_C = false;
        this.current_question[0].checked_D = false;
      }
      else if (e.target.id === "B") {
        this.current_question[0].checked_A = false;
        this.current_question[0].checked_B = true;
        this.current_question[0].checked_C = false;
        this.current_question[0].checked_D = false;
      }
      else if (e.target.id === "C") {
        this.current_question[0].checked_A = false;
        this.current_question[0].checked_B = false;
        this.current_question[0].checked_C = true;
        this.current_question[0].checked_D = false;
      }
      else if (e.target.id === "D") {
        this.current_question[0].checked_A = false;
        this.current_question[0].checked_B = false;
        this.current_question[0].checked_C = false;
        this.current_question[0].checked_D = true;
      }
    }
    //console.log(this.current_question[0]);
    //console.log(this.saveState[q_no]);
  }

  saveAndNext(q_no) {
    if (this.current_question[0].state == 0)
      this.current_question[0].state = 1;
    this.saveState[q_no] = this.current_question[0];
    q_no = q_no + 1;
    document.getElementById("q" + q_no).style.backgroundColor = this.stateMap[this.saveState[q_no - 1].state];
    this.changeQuestion(q_no);
  }

  changeQuestion(q_no) {
    if (this.saveState[q_no].state == 0)
      this.saveState[q_no].state = 1;
    this.current_question[0] = this.saveState[q_no];

    q_no = q_no + 1;
    document.getElementById("q" + q_no).style.backgroundColor = this.stateMap[this.saveState[q_no - 1].state];
  }

  clearResponse(q_no) {
    this.current_question[0].isChecked = false;
    this.current_question[0].checked_A = false;
    this.current_question[0].checked_B = false;
    this.current_question[0].checked_C = false;
    this.current_question[0].checked_D = false;
    this.current_question[0].state = 1;
    this.saveState[q_no] = this.current_question[0];

    q_no = q_no + 1;
    document.getElementById("q" + q_no).style.backgroundColor = this.stateMap[this.saveState[q_no - 1].state];
    //console.log(this.current_question[0]);
    //console.log(this.saveState[q_no]);
  }

  markReviewAndNext(q_no) {
    if (this.current_question[0].isChecked) {
      this.current_question[0].state = 4;
    }
    else {
      this.current_question[0].state = 3;
    }
    this.saveState[q_no] = this.current_question[0];

    q_no = q_no + 1;
    document.getElementById("q" + q_no).style.backgroundColor = this.stateMap[this.saveState[q_no - 1].state];
    this.changeQuestion(q_no);
  }

  submitTest() {
    var attempted1 = 0;
    var attempted2 = 0;
    var correct1 = 0;
    var correct2 = 0;
    var score = 0;
    var heading = "Yearwise-" + this.year;

    for (let i = 0; i < this.saveState.length; i++) {
      var marks = this.saveState[i].question.Marks;
      var correctAns = this.saveState[i].question.Answer;
      var isAttempted = this.saveState[i].checked_A || this.saveState[i].checked_B || this.saveState[i].checked_C || this.saveState[i].checked_D;
      var isCorrect = false;
      if (this.saveState[i].checked_A && correctAns == "A")
        isCorrect = true;
      else if (this.saveState[i].checked_B && correctAns == "B")
        isCorrect = true;
      else if (this.saveState[i].checked_C && correctAns == "C")
        isCorrect = true;
      else if (this.saveState[i].checked_D && correctAns == "D")
        isCorrect = true;

      if (isCorrect && marks == "1")
        correct1++;
      else if (isCorrect && marks == "2")
        correct2++;
      if (isAttempted && marks == "1")
        attempted1++;
      else if (isAttempted && marks == "2")
        attempted2++;
    }

    score = correct1 + 2 * correct2;
    console.log(score);

    var data = {
      "heading": heading,
      "totalQuestions": this.questions.length,
      "totalAttempted": {
        "oneMark": attempted1,
        "twoMarks": attempted2
      },
      "totalCorrect": {
        "oneMark": correct1,
        "twoMarks": correct2
      },
      "score": score
    };
    console.log(JSON.stringify(data));
    this.router.navigate(['/result', { resultData: JSON.stringify(data) }]);
  }

}
