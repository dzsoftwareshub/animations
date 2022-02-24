import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorChangeComponent } from './color-change/color-change.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideComponent } from './slide/slide.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { SlideshowsComponent } from './slideshows/slideshows.component';
import { AboutComponent } from './about/about.component';
import { RemoveComponent } from './remove/remove.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangeComponent,
    HeaderComponent,
    SectionComponent,
    HomepageComponent,
    SlideComponent,
    KeyframesComponent,
    SlideshowsComponent,
    AboutComponent,
    RemoveComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
