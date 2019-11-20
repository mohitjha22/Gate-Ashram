import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISubjectpractice } from './subjectpractice';
import { Observable } from 'rxjs';

@Injectable()
export class SubjectpracticeService {

    private _url: string;

    constructor(private http: HttpClient) {}

    getSubjectquestions(subject): Observable<ISubjectpractice[]> {
        this._url = "http://localhost:3000/" + subject + "/practice";
        return this.http.get<ISubjectpractice[]>(this._url);
    }
    
    
}