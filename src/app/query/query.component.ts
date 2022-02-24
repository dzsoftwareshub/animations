import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public image:string[] = [
    "assets/a.jpeg",
    "assets/b.jpeg",
    "assets/c.jpeg",
    "assets/d.jpeg",
    "assets/e.jpeg",
    "assets/f.jpeg",
    "assets/mobile.jpg"
  ]

}
