import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { Story } from 'src/app/models/story';
import { getComments, getCommentsComplete, getStory } from 'src/app/store/actions/news.actions';
import { NewsState, selectStory, selectComments, selectIsLoading } from 'src/app/store/reducers/news.reducer';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.less']
})
export class StoryDetailsComponent implements OnInit {

  id: String;
  story$: Observable<Story>;
  comments$: Observable<Comment[]>;
  loader$: Observable<boolean>;
  likes = 0;
  dislikes = 0;

  constructor(private newsStore: Store<NewsState>, private _activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    });

    this.loader$ = this.newsStore.pipe(
      select(selectIsLoading)
    )
    this.story$ = this.newsStore.pipe(
      select(selectStory)
    )
    this.comments$ = this.newsStore.pipe(
      select(selectComments)
    )

    this.newsStore.dispatch(getStory({storyId: this.id}));
    var Temp = [];
    console.log(this.id)
    this.story$.subscribe((response) => {
      if (this.id && response) {
        if (response.kids) {
          for (let index = 0; index < Math.min(10, response.kids.length); index++) {
            if (response.kids[index]) {
              Temp.push(response.kids[index].toString());
            }
          }
          this.newsStore.dispatch(getComments({commentIds: Temp, comments: []}));
        }
      }
    });

  }

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

}
