import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Story } from "../models/story";
import { Comment } from "../models/comment";
import { User } from "../models/user";
import { Observable, range, of } from 'rxjs';
import { map, mergeAll, toArray, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsReaderService {

  constructor(private _httpCaller: HttpClient) { }

  getTopStories(): Observable<String[]> {
    return this._httpCaller.get<String[]>(`${environment.apiUrl}/topstories.json`);
  }

  getStory(storyId: String): Observable<Story> {
    return this._httpCaller.get<Story>(`${environment.apiUrl}/item/${storyId}.json`);
  }

  getStories(storyList: String[]): Observable<Story[]> {
    var listOfStories: Story[] = new Array();
    storyList.forEach(storyId => {
     this._httpCaller.get<Story>(`${environment.apiUrl}/item/${storyId}.json`).pipe(
        map(response => response)   // users array [Object, Object, Object]
      )
      .subscribe(story => listOfStories.push(story));
    });

    return of(listOfStories);   
  }

  getComment(commentId: String): Observable<Comment> {
    return this._httpCaller.get<Comment>(`${environment.apiUrl}/item/${commentId}.json`);
  }

  getComments(comments: String[]): Observable<Comment[]> {
    var listOfComments: Comment[] = new Array();
    comments.forEach(commentId => {
      this._httpCaller.get<Comment>(`${environment.apiUrl}/item/${commentId}.json`).pipe(
        map(response => response)   // users array [Object, Object, Object]
      )
      .subscribe(comment => listOfComments.push(comment));
    });
    return of(listOfComments);
  }

  getUser(userId: String): Observable<User> {
    return this._httpCaller.get<User>(`${environment.apiUrl}/user/${userId}.json`);
  }
}
