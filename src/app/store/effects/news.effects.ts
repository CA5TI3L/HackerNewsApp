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
    mergeMap((action) => this.newsService.getStories(action.storyList)
      .pipe(
        map(response => { 
        return fromActions.getStoriesComplete({ stories: response});
        }),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
        )
      )
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
    mergeMap((action) => this.newsService.getComments(action.comments)
      .pipe(
        map(response => { 
        return fromActions.getCommentsComplete({ comments: response});
        }),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
        )
      )
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
