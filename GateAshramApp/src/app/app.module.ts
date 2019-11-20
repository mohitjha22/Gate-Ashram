import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsService } from './subjects/subjects.service';
import { TopicsComponent } from './topics/topics.component';
import { TopicsService } from './topics/topics.service';
import { SubjectpracticeComponent } from './subjectpractice/subjectpractice.component';
import { SubjectpracticeService } from './subjectpractice/subjectpractice.service';
import { TopicpracticeComponent } from './topicpractice/topicpractice.component';
import { TopicpracticeService } from './topicpractice/topicpractice.service';
import { YearsComponent } from './years/years.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SubjectsComponent,
    TopicsComponent,
    SubjectpracticeComponent,
    TopicpracticeComponent,
    YearsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SubjectsService,TopicsService,SubjectpracticeService,TopicpracticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
