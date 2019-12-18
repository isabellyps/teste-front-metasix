import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private url = "https://poc.metasix.solutions/parse/classes/FAQ";

  constructor(private http: HttpClient) { }



  getFaq(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': 'br.com.metasix.poc',
      })
    };
    return this.http.get(this.url, httpOptions);
  }
}
