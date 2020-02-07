import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectsComponent } from './subjects/subjects.component';
import { TopicsComponent } from './topics/topics.component';
import { YearsComponent } from './years/years.component';
import { SubjectpracticeComponent } from './subjectpractice/subjectpractice.component';
import { TopicpracticeComponent } from './topicpractice/topicpractice.component';
import { YearpracticeComponent } from './yearpractice/yearpractice.component';
import { YeartestComponent } from './yeartest/yeartest.component';
import { ResultComponent } from './result/result.component';
import { SubjecttestComponent } from './subjecttest/subjecttest.component';
import { TopictestComponent } from './topictest/topictest.component';

const routes: Routes = [
  {path: 'subjects/:branch', component: SubjectsComponent},
  {path: 'topics/:subject', component: TopicsComponent},
  {path: 'practice/subject/:subject', component: SubjectpracticeComponent},
  {path: 'years/:branch', component: YearsComponent},
  {path: 'topicpractice', component: TopicpracticeComponent},
  {path: 'practice/:branch/:year', component: YearpracticeComponent},
  {path: 'test/subject/:subject', component: SubjecttestComponent},
  {path: 'test/:branch/:year', component: YeartestComponent},
  {path: 'result', component: ResultComponent},
  
  {path: 'topictest', component: TopictestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
