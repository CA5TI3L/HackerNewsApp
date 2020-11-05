import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { getUser } from 'src/app/store/actions/news.actions';
import { NewsState, selectIsLoading, selectUser } from 'src/app/store/reducers/news.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  id: String;
  user$: Observable<User>;
  loader$: Observable<boolean>;

  constructor(private newsStore: Store<NewsState>, private _activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    });

    this.loader$ = this.newsStore.pipe(
      select(selectIsLoading)
    )

    this.user$ = this.newsStore.pipe(
      select(selectUser)
    )

    this.newsStore.dispatch(getUser({userId: this.id}));

    // this.user$.subscribe((response) => {
    //   if (this.id && response) {
    //     if (response.karma) {
    //       debugger
    //       console.log(response)
    //     }
    //   }
    // })
  }

}
