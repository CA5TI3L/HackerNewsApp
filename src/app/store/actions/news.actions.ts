import { createAction, props } from '@ngrx/store';
import { Story } from "../../models/story";
import { Comment } from "../../models/comment";
import { User } from "../../models/user";

export const getTopStories = createAction(
  '[News] getTopStories'
);

export const getTopStoriesComplete = createAction(
  '[News] getTopStoriesComplete',
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
    props<{ storyIds: String[], stories: Story[] }>(),
);

export const getStoriesComplete = createAction(
  '[News] getStoriesComplete',
   props<{ stories: Story[] }>()
);

export const getComment = createAction(
  '[News] getComment',
    props<{ commentId: String }>()
);

export const getCommentComplete = createAction(
  '[News] getCommentComplete',
   props<{ comment: Comment }>()
);

export const getComments = createAction(
  '[News] getComments',
   props<{ commentIds: String[], comments: Comment[] }>()
);

export const getCommentsComplete = createAction(
  '[News] getCommentsComplete',
   props<{ comments: Comment[] }>()
);

export const getUser = createAction(
  '[News] getUser',
   props<{ userId: String }>()
);

export const getUserComplete = createAction(
  '[News] getUserComplete',
   props<{ user: User }>()
);
