import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private baseUrl = 'http://localhost:8080/api/levels';

  constructor(private http: HttpClient) {}

  getAllLevels(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getLevelInfo(level: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${level}`);
  }
}