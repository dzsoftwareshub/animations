import { animation } from '@angular/animations';
import { animate } from '@angular/animations';
import { style } from '@angular/animations';

export const fade = animation([
  style({opacity:"0"}),
  animate("1s",style({
    opacity:"1"
  }))
]);

export const zoomIn = animation([
  style({
    transform:"scale(0)"
  }),
  animate("500ms 1s",style({
      transform:"scale(1)"
    }))
]);
