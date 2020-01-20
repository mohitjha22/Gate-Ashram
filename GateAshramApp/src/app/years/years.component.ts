import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  public years = [
    "1990","1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998",
    "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006",
    "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014",
    "2015", "2016", "2017", "2018"
  ];

  public practice="p";
  public test="t";

  public branch;
  public selectedYear;

  constructor(private route : ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.branch = this.route.snapshot.params.branch;
    this.selectedYear="1989";
  }

  onClickSubmit(data) {
    //console.log(data);
    this.selectedYear=data.year;
    if(data.testType=="Practice"){
      this.router.navigateByUrl("/practice/"+this.branch+"/"+this.selectedYear);
    }
    else if(data.testType=="Test"){
      this.router.navigateByUrl("/test/"+this.branch+"/"+this.selectedYear);
    }
    
    //alert("Entered Email id : " + this.selectedYear);
 }

}
