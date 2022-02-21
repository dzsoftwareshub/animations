import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.css'],
  animations:[
    trigger("mydiv",[
      state("red",style({background:"url(assets/images/b.jpeg)",backgroundSize:"cover"})),
      state("green",style({background:"url(assets/images/c.jpeg)",backgroundSize:"cover"})),
      state("blue",style({background:"url(assets/images/d.jpeg)",backgroundSize:"cover"})),
      state("yellow",style({background:"url(assets/images/e.jpeg)",backgroundSize:"cover"})),
      state("black",style({background:"url(assets/images/f.jpeg)",backgroundSize:"cover"})),
      transition("*<=>*",[animate("1s 10ms ease-in-out")])
    ]),
  ]
})
export class KeyframesComponent implements OnInit {
  private color:string[] = ["red","green","blue","yellow","black"];
  private index:number = 0;
  public control:string = this.color[this.index];
  constructor() { }

  ngOnInit(): void {
  }

  next():void{

    if(this.color.length-1 > this.index){
      this.index++;
      this.control = this.color[this.index];
    }
    else{
      this.index = 0;
      this.control = this.color[this.index];
    }
  }

  prev():void{
    if(this.index == 0){
      this.index = this.color.length-1;
      this.control = this.color[this.index];
    }
    else{
      if(this.index > 0){
        this.index--;
        this.control = this.color[this.index];
      }

    }
  }

}
