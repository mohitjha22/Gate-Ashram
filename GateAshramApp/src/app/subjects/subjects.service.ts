import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ISubjects } from './subjects';
import { Observable } from 'rxjs';

@Injectable()
export class SubjectsService {

    private _url: string;

    constructor(private http: HttpClient) {
    }

    getSubjects(branch): Observable<ISubjects[]> {

        this._url = "http://localhost:3000/subjects/"+ branch ;
        return this.http.get<ISubjects[]>(this._url);
    }
    
    
}