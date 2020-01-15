import { Component, OnInit } from '@angular/core';
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

  constructor(private _yeartestService: YeartestService) { }

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
      });


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
    console.log(this.current_question[0]);
    //console.log(this.saveState[q_no]);
  }

  saveAndNext(q_no) {
    if(this.current_question[0].state == 0)
      this.current_question[0].state = 1;
    this.saveState[q_no] = this.current_question[0];
    q_no = q_no + 1;
    document.getElementById("q"+q_no).style.backgroundColor = this.stateMap[this.saveState[q_no-1].state];
    this.changeQuestion(q_no);
  }

  changeQuestion(q_no) {
    if(this.saveState[q_no].state == 0)
      this.saveState[q_no].state = 1;
    this.current_question[0] = this.saveState[q_no];

    q_no = q_no + 1;
    document.getElementById("q"+q_no).style.backgroundColor = this.stateMap[this.saveState[q_no-1].state];
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
    document.getElementById("q"+q_no).style.backgroundColor = this.stateMap[this.saveState[q_no-1].state];
    //console.log(this.current_question[0]);
    //console.log(this.saveState[q_no]);
  }

  markReviewAndNext(q_no) {
    if(this.current_question[0].isChecked) {
      this.current_question[0].state = 4;
    }
    else {
      this.current_question[0].state = 3;
    }
    this.saveState[q_no] = this.current_question[0];

    q_no = q_no + 1;
    document.getElementById("q"+q_no).style.backgroundColor = this.stateMap[this.saveState[q_no-1].state];
    this.changeQuestion(q_no);
  }

}
