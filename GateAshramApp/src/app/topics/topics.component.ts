import { Component, OnInit } from '@angular/core';
import { TopicsService } from './topics.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  public topics = [];
  public subject;
  public topicForm: FormGroup;
  public submitDisabled = true;
  public formData;

  constructor(
    private router: Router,
    private _topicsService: TopicsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.subject = this.route.snapshot.params.subject;

    this._topicsService.getTopics(this.subject)
      .subscribe((data) => this.topics = data);

    this.topicForm = this.fb.group({
      topics: this.fb.array([])
    });
  }

  onChange(topic: string, isChecked: boolean) {
    const topicFormArray = <FormArray>this.topicForm.controls.topics;

    if (isChecked) {
      topicFormArray.push(new FormControl(topic));
    } else {
      let index = topicFormArray.controls.findIndex(x => x.value == topic)
      topicFormArray.removeAt(index);
    }
    if (topicFormArray.length > 0)
      this.submitDisabled = false;
    else
      this.submitDisabled = true;
  }

  onSubmit1() {
    this.formData = this.topicForm.value.topics;
    //console.log(this.formData);
    this.router.navigate(['/topicpractice', {subject:this.subject,topics:JSON.stringify(this.formData)}]);
    
  }
  onSubmit2() {
    this.formData = this.topicForm.value.topics;
    //console.log(this.formData);
    this.router.navigate(['/topictest', {subject:this.subject,topics:JSON.stringify(this.formData)}]);
    
  }

}
