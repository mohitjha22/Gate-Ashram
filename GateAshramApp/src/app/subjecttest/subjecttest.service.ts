import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjecttestService {

  public _url;

  constructor(private http: HttpClient) { }

  getTestQuestions(subject): Observable<any[]> {
    this._url = "http://localhost:3000/test/" +  subject;
    return this.http.get<any[]>(this._url);

  }

}
