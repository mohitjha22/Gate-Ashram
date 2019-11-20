import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from './subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  public subjects = [];
  public branch;

  constructor(private _subjectsService: SubjectsService,  private route : ActivatedRoute ) { }

  ngOnInit() {
    this.branch = this.route.snapshot.params.branch;
    this._subjectsService.getSubjects(this.branch)
        .subscribe((data) => this.subjects = data);
  }

}
