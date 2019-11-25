import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITopicpractice } from './topicpractice';
import { Observable } from 'rxjs';

@Injectable()
export class TopicpracticeService {

    private get_url: string;

    constructor(private http: HttpClient) {}
    
    getTopicquestions(subject,topics): Observable<any> {
        //console.log(topics);
        this.get_url = "http://localhost:3000/practice/subject/topics";
        return this.http.post<any>(this.get_url, [{'subject':subject},{'topics':topics}]);
    }

}