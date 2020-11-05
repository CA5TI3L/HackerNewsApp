import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { arraysAreNotAllowedMsg } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { getStories, getTopStories } from 'src/app/store/actions/news.actions';
import { Story} from "../../models/story";
import { NewsState, selectStories, selectTopStories, selectIsLoading } from "../../store/reducers/news.reducer";

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.less']
})
export class TopStoriesComponent implements OnInit {

  topStories$: Observable<String[]>;
  stories$: Observable<Story[]>;
  loader$: Observable<boolean>;
  topStoriesCount = 0;

  constructor(private newsStore: Store<NewsState>) { }

  ngOnInit(): void {
    this.loader$ = this.newsStore.pipe(
      select(selectIsLoading)
    )
    this.stories$ = this.newsStore.pipe(
      select(selectStories)
    )
    this.topStories$ = this.newsStore.pipe(
      select(selectTopStories)
    )
    this.newsStore.dispatch(getTopStories());
    var Temp = [];

    this.topStories$.subscribe((stories) => {
      if (stories && stories.length > 0) {
        this.topStoriesCount = Math.min(10, stories.length);
        for (let index = 0; index < Math.min(10, stories.length); index++) {
          if (stories[index]) {
            Temp.push(stories[index].toString());
          }
        }
        this.newsStore.dispatch(getStories({storyIds: Temp, stories: []}));
      }
    })   
  }

}
