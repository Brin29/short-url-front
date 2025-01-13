import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortenUrlServiceService {

  constructor(private http: HttpClient) {}

  shortenUrl(url:any): Observable<any>{
    return this.http.post("http://localhost:8080/generate", url);
  }
}
