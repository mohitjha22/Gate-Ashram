import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITopicpractice } from './topicpractice';
import { Observable } from 'rxjs';

@Injectable()
export class TopicpracticeService {

    private _url: string = "http://192.168.43.60:3000/CSE/subjects/DIGITAL LOGIC/Combinational Circuits/practice";

    constructor(private http: HttpClient) {}

    getTopicquestions(): Observable<ITopicpractice[]> {

        return this.http.get<ITopicpractice[]>(this._url);
    }
    
    
}