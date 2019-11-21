import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IYearpractice } from './yearpractice';
import { Observable } from 'rxjs';

@Injectable()
export class YearpracticeService {

    private _url: string;

    constructor(private http: HttpClient) {}

    getYearquestions(branch,year): Observable<IYearpractice[]> {
        this._url = "http://localhost:3000/practice/" + branch+"/"+year ;
        return this.http.get<IYearpractice[]>(this._url);
    }
    
    
}