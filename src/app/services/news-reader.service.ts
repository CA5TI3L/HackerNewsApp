import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Story } from "../models/story";
import { Comment } from "../models/comment";
import { User } from "../models/user";
import { Observable, range } from 'rxjs';
import { map, mergeAll, toArray, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsReaderService {

  constructor(private _httpCaller: HttpClient) { }

  getTopStories(): Observable<String[]> {
    return this._httpCaller.get<String[]>(`${environment.apiUrl}/topstories.json`);
  }

  getStory(storyId: string): Observable<Story> {
    return this._httpCaller.get<Story>(`${environment.apiUrl}/item/${storyId}.json`);
  }

  getComments(comments: string[]): Comment[] {
    var listOfComments: Comment[] = new Array();
    comments.forEach(element => {
      this._httpCaller.get<Comment>(`${environment.apiUrl}/item/${element}.json`).pipe(
        map(response => response)   // users array [Object, Object, Object]
      )
      .subscribe(comment => listOfComments.push(comment));
    });
    return listOfComments;
  }

  getUser(userId: string): Observable<User> {
    return this._httpCaller.get<User>(`${environment.apiUrl}/item/${userId}.json`);
  }
}
