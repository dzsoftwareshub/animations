import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css'],
  animations: [
    trigger("mydiv",[
      state("red",style({backgroundColor:'red'})),
      state("blue",style({backgroundColor:'blue'})),
      transition("red=>blue",animate("1s")),
      transition("blue=>red",animate("1s"))
    ])
  ]
})
export class ColorChangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public control:string = "red";
  private x:any;
  start():void {
    this.x = setInterval(()=>{
      if(this.control == "red"){
        this.control = "blue";
      }
      else{
        this.control = "red";
      }
    },1000);
  }

  stop():void{
    clearInterval(this.x);
  }


}
