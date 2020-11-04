import { createAction, props } from '@ngrx/store';
import { Story } from "../../models/story";
import { Comment } from "../../models/comment";
import { User } from "../../models/user";

export const getTopStories = createAction(
  '[News] getTopStories'
);

export const getTopStoriesComplete = createAction(
  '[News] getTopStories',
   props<{ topStories: String[] }>()
);

export const getStory = createAction(
  '[News] getStory',
    props<{ storyId: String }>()
);

export const getStoryComplete = createAction(
  '[News] getStoryComplete',
   props<{ story: Story }>()
);

export const getStories = createAction(
  '[News] getStories',
    props<{ storyList: String[] }>()
);

export const getStoriesComplete = createAction(
  '[News] getStoriesComplete',
   props<{ stories: Story[] }>()
);

export const getComments = createAction(
  '[News] getComments',
   props<{ comments: String[] }>()
);

export const getCommentsComplete = createAction(
  '[News] getCommentsComplete',
   props<{ comments: Comment[] }>()
);

export const getUser = createAction(
  '[News] getUser',
   props<{ userId: string }>()
);

export const getUserComplete = createAction(
  '[News] getCommentsComplete',
   props<{ user: User }>()
);
