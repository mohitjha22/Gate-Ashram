import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects/subjects.component';
import { TopicsComponent } from './topics/topics.component';
import { SubjectpracticeComponent } from './subjectpractice/subjectpractice.component';
import { TopicpracticeComponent } from './topicpractice/topicpractice.component';
import { YearsComponent } from './years/years.component';


const routes: Routes = [
  {path: 'subjects/:branch', component: SubjectsComponent},
  {path: 'topics/:subject', component: TopicsComponent},
  {path: 'practice/subject/:subject', component: SubjectpracticeComponent},
  {path: 'years/:branch', component: YearsComponent},
  {path: 'topicpractice', component: TopicpracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
