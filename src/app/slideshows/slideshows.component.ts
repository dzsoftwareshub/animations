import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  useAnimation
} from '@angular/animations';
import { fade, zoomIn } from "../animation";

@Component({
  selector: 'app-slideshows',
  templateUrl: './slideshows.component.html',
  styleUrls: ['./slideshows.component.css'],
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
export class SlideshowsComponent implements OnInit {

  public image:any[] = [
    {
      path: "assets/images/a.jpeg",
      title: "Gaphics Designer" ,
      description: "A best graphics developer",
      buttons: [
        {
          btntitle: "Get Start",
          btnhref: "https://google.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        },
        {
          btntitle: "Documentation",
          btnhref: "https://facebook.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        }
      ]
    },
    {
      path: "assets/images/b.jpeg",
      title: "Software Developer",
      description: "A world`s best software developer",
      buttons: [
        {
          btntitle: "Know More",
          btnhref: "https://google.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        },
        {
          btntitle: "Grow Now",
          btnhref: "https://facebook.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        }
      ]
    },
    {
      path: "assets/images/c.jpeg",
      title: "Game Developer",
      description: "A world`s powerful game developer",
      buttons: [
        {
          btntitle: "Know More",
          btnhref: "https://google.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        },
        {
          btntitle: "Inroll Now",
          btnhref: "https://facebook.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        }
      ]
    },
    {
      path: "assets/images/d.jpeg",
      title: "Data Science Engineer",
      description: "A new Data science Engineer",
      buttons: [
        {
          btntitle: "More Info",
          btnhref: "https://google.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        },
        {
          btntitle: "Home",
          btnhref: "https://facebook.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        }
      ]
    },
    {
      path: "assets/images/e.jpeg",
      title: "Ethical Hacker",
      description: "A world`s best etical hacker",
      buttons: [
        {
          btntitle: "Google",
          btnhref: "https://google.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        },
        {
          btntitle: "Facebook",
          btnhref: "https://facebook.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        }
      ]
    },
    {
      path: "assets/images/f.jpeg",
      title: "Software Tester",
      description: "A perfect software tester",
      buttons: [
        {
          btntitle: "Get Apis",
          btnhref: "https://google.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        },
        {
          btntitle: "Register Now",
          btnhref: "https://facebook.com",
          btnbgcolor: "red",
          btntxtcolor: "white"
        }
      ]
    }
  ];



  public index:number = 0;

  public control:string = this.image[this.index].path;

  constructor() { }

  ngOnInit(): void {
    /*setInterval(()=>{
      this.next();
    },5000);*/
  }

  next():void{
    if(this.index < this.image.length-1){
      this.index++;
      this.control = this.image[this.index].path;
    }
    else{
      this.index = 0;
      this.control = this.image[this.index].path;
    }
  }

  prev():void{
    if(this.index > 0){
      this.index--;
      this.control = this.image[this.index].path;
    }
    else{
      this.index = this.image.length-1;
      this.control = this.image[this.index].path;
    }
  }

}
