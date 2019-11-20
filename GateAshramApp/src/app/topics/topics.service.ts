import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITopics } from './topics';
import { Observable } from 'rxjs';

@Injectable()
export class TopicsService {

    private _url: string;

    constructor(private http: HttpClient) {}

    getTopics(subject): Observable<ITopics[]> {
        this._url = "http://localhost:3000/" + subject + "/topics";
        return this.http.get<ITopics[]>(this._url);
    }
    
}