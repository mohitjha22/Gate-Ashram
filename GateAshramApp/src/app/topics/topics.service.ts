import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITopics } from './topics';
import { Observable } from 'rxjs';

@Injectable()
export class TopicsService {

    private get_url: string;
    private submit_url : string;

    constructor(private http: HttpClient) {}

    getTopics(subject): Observable<ITopics[]> {
        this.get_url = "http://localhost:3000/topics/" + subject ;
        return this.http.get<ITopics[]>(this.get_url);
    }
    
}