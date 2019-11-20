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
  public subject;
  constructor(private _subjectpracticeService: SubjectpracticeService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.subject = this.route.snapshot.params.subject;
    this._subjectpracticeService.getSubjectquestions(this.subject)
        .subscribe((data) => this.questions = data);
  }

}
