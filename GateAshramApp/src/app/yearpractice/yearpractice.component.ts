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
  public branch;
  public year;
  constructor(private _yearpracticeService: YearpracticeService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.branch = this.route.snapshot.params.branch;
    this.year = this.route.snapshot.params.year;
    this._yearpracticeService.getYearquestions(this.branch,this.year)
        .subscribe((data) => this.questions = data);
  }

}
