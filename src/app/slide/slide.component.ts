import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
    trigger("photo",[
      state("hide",style({bottom:"500px"})),
      state("open",style({bottom:"0"})),
      transition("hide=>open",[animate("2s")])
    ]),
    trigger("fade",[
      state("fadeOut",style({opacity:"0"})),
      state("fadeIn",style({opacity:"1"})),
      transition("fadeOut=>fadeIn",[animate("2s")])
    ])
  ]
})
export class SlideComponent implements OnInit {

  public photoControl:any = "hide";
  public textControl:string = "fadeOut";
  constructor() { }

  ngOnInit(): void {

  }

  photoAnim():void{
    this.photoControl = "open";
    this.textControl = "fadeIn";
  }

}
