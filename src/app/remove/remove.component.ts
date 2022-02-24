import { Component, OnInit } from '@angular/core';
import { fadeOut, fadeIn } from "../animation";
import { trigger, transition, useAnimation } from "@angular/animations"
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css'],
  animations: [
    trigger("fadeToggle",[
      transition(":enter",[
        useAnimation(fadeIn)
      ]),
      transition(":leave",[
        useAnimation(fadeOut)
      ])
    ])
  ]
})
export class RemoveComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  public table:any[] = [
    {
      name: "Er Vikesh",
      class: 12,
      roll: 15
    },
    {
      name: "Mohit Kumar",
      class: 8,
      roll: 5
    },
    {
      name: "Ruplal Kumar",
      class: 2,
      roll: 1
    },
    {
      name: "Ankush Kumar",
      class: 1,
      roll: 10
    }
  ]

  public myform:any = this.fb.group({
    name: [""],
    roll: [""],
    class: [""]
  });

  delete(index:number):void {
    this.table.splice(index,1)
  }

  add():void{
    this.table.push(this.myform.value)
  }

}
