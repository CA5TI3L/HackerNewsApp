import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './store/effects/news.effects';
import * as fromNews from './store/reducers/news.reducer';
import { reducer } from './store/reducers/news.reducer';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { UserComponent } from './components/user/user.component';

registerLocaleData(en);

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    TopStoriesComponent,
    StoryDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({newsState: reducer}, { metaReducers: [debug] }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([NewsEffects]),
    NzProgressModule,
    NzCommentModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
