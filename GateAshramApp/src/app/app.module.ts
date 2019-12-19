import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsService } from './subjects/subjects.service';
import { TopicsComponent } from './topics/topics.component';
import { TopicsService } from './topics/topics.service';
import { YearsComponent } from './years/years.component';
import { SubjectpracticeComponent } from './subjectpractice/subjectpractice.component';
import { SubjectpracticeService } from './subjectpractice/subjectpractice.service';
import { TopicpracticeComponent } from './topicpractice/topicpractice.component';
import { TopicpracticeService } from './topicpractice/topicpractice.service';
import { YearpracticeComponent } from './yearpractice/yearpractice.component';
import { YearpracticeService } from './yearpractice/yearpractice.service';
import { YeartestComponent } from './yeartest/yeartest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SubjectsComponent,
    TopicsComponent,
    YearsComponent,
    SubjectpracticeComponent,
    TopicpracticeComponent,
    YearpracticeComponent,
    YeartestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [SubjectsService,TopicsService,SubjectpracticeService,TopicpracticeService,YearpracticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
