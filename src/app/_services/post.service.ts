import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL: String = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) { }

  postList(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}`)
  }

}
