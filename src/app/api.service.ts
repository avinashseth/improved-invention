import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { IPost } from './post';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url + 'posts');
  }
  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.url + 'posts/' + id);
  }
  createNewPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(this.url + 'posts/', post);
  }
  removePost(id): Observable<IPost> {
    return this.http.delete<IPost>(this.url + 'posts/' + id);
  }

}
