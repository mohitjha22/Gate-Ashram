import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopictestService {
  public _url;

  constructor(private http: HttpClient) { }

  getTestQuestions(data): Observable<any[]> {
    this._url = "http://localhost:3000/test/subject/topics";
    return this.http.post<any[]>(this._url, [{"data" : data}]);

  }
}
