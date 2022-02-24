import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorChangeComponent } from './color-change/color-change.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlideComponent } from './slide/slide.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { SlideshowsComponent } from './slideshows/slideshows.component';
import { AboutComponent } from './about/about.component';
import { RemoveComponent } from './remove/remove.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "color-change",
    component: ColorChangeComponent
  },
  {
    path: "slide",
    component: SlideComponent
  },
  {
    path: "keyframes",
    component: KeyframesComponent
  },
  {
    path: "slideshows",
    component: SlideshowsComponent
  },
  {
    path: "remove",
    component: RemoveComponent
  },
  {
    path: "query",
    component: QueryComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
