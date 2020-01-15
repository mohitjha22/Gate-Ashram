import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YeartestService {

  public _url;

  constructor(private http: HttpClient) { }

  getTestQuestions(year, branch): Observable<any[]> {
    this._url = "http://localhost:3000/test/" + branch + "/" + year;
    return this.http.get<any[]>(this._url);

  }
}
