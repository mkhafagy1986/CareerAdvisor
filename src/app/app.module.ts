import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannarAreaComponent } from './Home/bannar-area/bannar-area.component';
import { FeatureAreaComponent } from './Home/feature-area/feature-area.component';
import { PopularCoursesAreaComponent } from './Home/popular-courses-area/popular-courses-area.component';
import { SearchCourseAreaComponent } from './Home/search-course-area/search-course-area.component';
import { UpComingEventsAreaComponent } from './Home/up-coming-events-area/up-coming-events-area.component';
import { ReviewAreaComponent } from './Home/review-area/review-area.component';
import { CtaOneAreaComponent } from './Home/cta-one-area/cta-one-area.component';
import { BlogAreaComponent } from './Home/blog-area/blog-area.component';
import { CtaTwoAreaComponent } from './Home/cta-two-area/cta-two-area.component';
import { SocialMediaHeaderComponent } from './Shared/Components/social-media-header/social-media-header.component';
import { MenuHeaderComponent } from './Shared/Components/menu-header/menu-header.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannarAreaComponent,
    FeatureAreaComponent,
    PopularCoursesAreaComponent,
    SearchCourseAreaComponent,
    UpComingEventsAreaComponent,
    ReviewAreaComponent,
    CtaOneAreaComponent,
    BlogAreaComponent,
    CtaTwoAreaComponent,
    SocialMediaHeaderComponent,
    MenuHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    SocialMediaHeaderComponent,
    MenuHeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
