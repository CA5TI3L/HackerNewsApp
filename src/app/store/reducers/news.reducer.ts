import { createReducer, on, createFeatureSelector, createSelector, Action } from '@ngrx/store';
import { Story } from "../../models/story";
import { Comment } from "../../models/comment";
import { User } from "../../models/user";
import * as Actions from "../actions/news.actions";


export const newsFeatureKey = 'news';

export interface NewsState {
  isLoading: boolean;
  Story: Story;
  Comment: Comment;
  Stories: Story[];
  User: User;
  Comments: Comment[];
  TopStories: string[];
}

export const initialState: NewsState = {
  isLoading: false,
  Story: {} as Story,
  Comment: {} as Comment,
  Stories: [],
  User: {} as User,
  Comments: [],
  TopStories: []
};


export const Newsreducer = createReducer(
  initialState,
  on(Actions.getStory, state => ({
    ...state,
    isLoading: true
  })),
  on(Actions.getStoryComplete, (state, { story }) => ({
    ...state,
    isLoading: false,
    Story: story
  })),
  on(Actions.getTopStories, state => ({
    ...state,
    isLoading: true
  })),
  on(Actions.getTopStoriesComplete, (state, { topStories }) => ({
    ...state,
    isLoading: false,
    TopStories: [...topStories]
  })),
  on(Actions.getStories, (state, { stories }) => ({
    ...state,
    isLoading: true,
    Stories: stories
  })),
  on(Actions.getStoriesComplete, (state, { stories }) => ({
    ...state,
    isLoading: false,
    Stories: [...stories]
  })),
  on(Actions.getComment, state => ({
    ...state,
    isLoading: true
  })),
  on(Actions.getCommentComplete, (state, { comment }) => ({
    ...state,
    isLoading: false,
    Comment: comment
  })),
  on(Actions.getComments, state => ({
    ...state,
    isLoading: true
  })),
  on(Actions.getCommentsComplete, (state, { comments }) => ({
    ...state,
    isLoading: false,
    Comments: [...comments]
  })),
  on(Actions.getUser, state => ({
    ...state,
    isLoading: true
  })),
  on(Actions.getUserComplete, (state, { user }) => ({
    ...state,
    isLoading: false,
    User: user
  })),
);

export function reducer(state: NewsState | undefined, action: Action) {
  return Newsreducer(state, action);
}

export const selectFeature = createFeatureSelector<any, NewsState>('newsState');

export const selectIsLoading = createSelector(
  selectFeature,
  (state: NewsState) => state.isLoading);

export const selectStory = createSelector(
  selectFeature,
  (state: NewsState) => state.Story);

export const selectStories = createSelector(
  selectFeature,
  (state: NewsState) => state.Stories);

export const selectUser = createSelector(
  selectFeature,
  (state: NewsState) => state.User);

export const selectComments = createSelector(
  selectFeature,
  (state: NewsState) => state.Comments);

export const selectTopStories = createSelector(
  selectFeature,
  (state: NewsState) => state.TopStories);
