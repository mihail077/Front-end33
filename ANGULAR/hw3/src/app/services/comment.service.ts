import { Injectable } from '@angular/core';
import { IComment } from '../../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments!: IComment[];

  constructor(
    private http:HttpClient
  ) { }

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
}
}
