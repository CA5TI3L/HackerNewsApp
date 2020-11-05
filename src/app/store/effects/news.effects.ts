import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsReaderService } from '../../services/news-reader.service';
import * as fromActions from "../actions/news.actions";



@Injectable()
export class NewsEffects {

  loadStory$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getStory),
    mergeMap((action) => this.newsService.getStory(action.storyId)
      .pipe(
        map(response => { 
        return fromActions.getStoryComplete({ story: response});
        }),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
        )
      )
    )
  );

  loadStories$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getStories),
    mergeMap((action) => { 
       if (action?.storyIds.length === 0) {
          return EMPTY;
       }
       return this.newsService.getStory(action.storyIds[0])
      .pipe(
        map(response => {
          if (action?.storyIds.length === 1) {
            return fromActions.getStoriesComplete({ stories: [...action.stories, response]});
          } 
           return fromActions.getStories({ storyIds: action.storyIds.slice(1), stories: [...action.stories, response]});
        }),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
        )
      })
    )
  );

  loadTopStories$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getTopStories),
    mergeMap(() => this.newsService.getTopStories()
      .pipe(
        map(response => { 
          return fromActions.getTopStoriesComplete({ topStories: response});
        }),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
        )
      )
    )
  );

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getComments),
    mergeMap((action) => {
      if (action?.commentIds.length === 0) {
        return EMPTY;
     }
     return this.newsService.getComment(action.commentIds[0])
    .pipe(
        map(response => { 
          if (action?.commentIds.length === 1) {
            return fromActions.getCommentsComplete({ comments : [...action.comments, response]});
          } 
           return fromActions.getComments({ commentIds: action.commentIds.slice(1), comments: [...action.comments, response]});
        }),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
        )
      })
    )
  );

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getUser),
    mergeMap((action) => this.newsService.getUser(action.userId)
      .pipe(
        map(response => { 
        return fromActions.getUserComplete({ user: response});
        }),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
        )
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsReaderService) {}

}
