import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectpracticeService } from './subjectpractice.service';

@Component({
  selector: 'app-subjectpractice',
  templateUrl: './subjectpractice.component.html',
  styleUrls: ['./subjectpractice.component.css']
})
export class SubjectpracticeComponent implements OnInit {

  public questions = [];
  public answers = [];
  public pageQuestions: Array<any>;
  public subject;
  constructor(private _subjectpracticeService: SubjectpracticeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subject = this.route.snapshot.params.subject;
    this._subjectpracticeService.getSubjectquestions(this.subject)
      .subscribe((data) => {
        this.questions = data;
        //console.log(this.questions);
        for (let idx = 0; idx < this.questions.length; idx++) {
          this.answers[this.questions[idx]._id] = this.questions[idx].Answer;
        }
        //console.log(this.answers);
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
    else if(this.answers[q_id].length == 1) {
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
