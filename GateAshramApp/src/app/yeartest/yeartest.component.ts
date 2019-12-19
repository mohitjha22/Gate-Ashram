import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yeartest',
  templateUrl: './yeartest.component.html',
  styleUrls: ['./yeartest.component.css']
})
export class YeartestComponent implements OnInit {

  public questions = [
    {
      "Question": "q1",
      "Option_A": "1a",
      "Option_B": "1b",
      "Option_C": "1c",
      "Option_D": "1d"
    },
    {
      "Question": "q2",
      "Option_A": "2a",
      "Option_B": "2b",
      "Option_C": "2c",
      "Option_D": "2d"
    },
    {
      "Question": "q3",
      "Option_A": "3a",
      "Option_B": "3b",
      "Option_C": "3c",
      "Option_D": "3d"
    },
    {
      "Question": "q4",
      "Option_A": "4a",
      "Option_B": "4b",
      "Option_C": "4c",
      "Option_D": "4d"
    },
    {
      "Question": "q5",
      "Option_A": "5a",
      "Option_B": "5b",
      "Option_C": "5c",
      "Option_D": "5d"
    },
    {
      "Question": "q6",
      "Option_A": "6a",
      "Option_B": "6b",
      "Option_C": "6c",
      "Option_D": "6d"
    },
    {
      "Question": "q7",
      "Option_A": "7a",
      "Option_B": "7b",
      "Option_C": "7c",
      "Option_D": "7d"
    },
    {
      "Question": "q8",
      "Option_A": "8a",
      "Option_B": "8b",
      "Option_C": "8c",
      "Option_D": "8d"
    },
    {
      "Question": "q9",
      "Option_A": "9a",
      "Option_B": "9b",
      "Option_C": "9c",
      "Option_D": "9d"
    },
    {
      "Question": "q10",
      "Option_A": "10a",
      "Option_B": "10b",
      "Option_C": "10c",
      "Option_D": "10d"
    }
  ];

  public stateMap = ['grey', 'red', 'green', 'purple', 'blue'];
  public saveState = [];
  public current_question = [];
  public isChecked = false;
  public option;
  public optionValue;

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this.questions.length; i++) {
      var obj = {
        "id": i,
        "question": this.questions[i],
        "checked_A": false,
        "checked_B": false,
        "checked_C": false,
        "checked_D": false,
        "state": 0
      };

      this.saveState[i] = obj;
    }

    this.current_question[0] = this.saveState[0];
    //console.log(this.current_question);
  }

  changeQuestion(q_no) {
    if (this.saveState[q_no].state == 0 || this.saveState[q_no].state == 1 || this.saveState[q_no].state == 3) {
      this.isChecked = false;
      this.option = "";
      this.optionValue = "";
    }

    this.current_question[0] = this.saveState[q_no];

    if (this.current_question[0].state == 0) {
      this.current_question[0].state = 1;
    }
    q_no = q_no + 1;
    document.getElementById("q" + q_no).style.backgroundColor = this.stateMap[this.current_question[0].state];
  }

  saveAndNext(q_no) {
    //console.log(q_no);
    if (this.isChecked) {
      if (this.option == "A") {
        this.saveState[q_no].checked_A = true;
        this.saveState[q_no].checked_B = false;
        this.saveState[q_no].checked_C = false;
        this.saveState[q_no].checked_D = false;
      }
      if (this.option == "B") {
        this.saveState[q_no].checked_A = false;
        this.saveState[q_no].checked_B = true;
        this.saveState[q_no].checked_C = false;
        this.saveState[q_no].checked_D = false;
      }
      if (this.option == "C") {
        this.saveState[q_no].checked_A = false;
        this.saveState[q_no].checked_B = false;
        this.saveState[q_no].checked_C = true;
        this.saveState[q_no].checked_D = false;
      }
      if (this.option == "D") {
        this.saveState[q_no].checked_A = false;
        this.saveState[q_no].checked_B = false;
        this.saveState[q_no].checked_C = false;
        this.saveState[q_no].checked_D = true;
      }
      this.saveState[q_no].state = 2;
      q_no = q_no + 1;
      document.getElementById("q" + q_no).style.backgroundColor = this.stateMap[this.current_question[0].state];
      this.changeQuestion(q_no);
    }
    else {
      q_no = q_no + 1;
      //document.getElementById("q" + q_no).style.backgroundColor = this.stateMap[this.current_question[0].state];
      this.changeQuestion(q_no);
    }
  }

  clearResponse(q_no) {
    this.current_question[0].checked_A = false;
    this.current_question[0].checked_B = false;
    this.current_question[0].checked_C = false;
    this.current_question[0].checked_D = false;
    this.current_question[0].state = 1;
    q_no = q_no + 1;
    document.getElementById("q" + q_no).style.backgroundColor = this.stateMap[this.current_question[0].state];
  }

  setAnswer(event) {
    this.option = event.srcElement.id;
    this.isChecked = event.srcElement.checked;
    this.optionValue = event.srcElement.value;
  }

}
