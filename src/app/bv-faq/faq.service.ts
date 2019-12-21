import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//config service
@Injectable({
  providedIn: 'root'
})
export class FaqService {

//url api
  private url = "https://poc.metasix.solutions/parse/classes/FAQ";

//httpClient
  constructor(private http: HttpClient) { }

//metodo get
  getFaq(): Observable<any> {
    //chave para acesso
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': 'br.com.metasix.poc',
      })
    };
    return this.http.get(this.url, httpOptions);
  }
}
