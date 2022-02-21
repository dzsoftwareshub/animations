import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, useAnimation } from '@angular/animations';
import { fade, zoomIn } from "../animation";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger("fade",[
      transition("*<=>*",[
        useAnimation(fade)
      ])
    ]),
    trigger("zoomIn",[
      transition("*<=>*",[
        useAnimation(zoomIn)
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
