import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  public years = [
    "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998",
    "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006",
    "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014",
    "2015", "2016", "2017", "2018"
  ];

  public branch;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.branch = this.route.snapshot.params.branch;
  }

}
