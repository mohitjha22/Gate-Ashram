import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showDiv = false;

  branches = [
    {
      name : "Computer Science",
      code : "CSE"
    },
    
    {
      name : "Civil",
      code : "CE"
    },
    
    {
      name : "Mechanical",
      code : "ME"
    },
    
    {
      name : "Metallurgy",
      code : "MME"
    },
    

  ];

  constructor() { }

  ngOnInit() {
  }

  showDropdown() {
    
    this.showDiv = !(this.showDiv);
    
  }

}
