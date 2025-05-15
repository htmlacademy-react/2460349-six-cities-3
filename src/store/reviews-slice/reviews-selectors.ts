import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { MAX_VISIBLE_COMMENTS, NameSpace } from '../../const';

export const selectComments = (state: RootState) => state[NameSpace.Reviews].comments;

export const selectCommentsLoading = (state: RootState) => state[NameSpace.Reviews].isDataLoading;

export const selectCommentSending = (state: RootState) => state[NameSpace.Reviews].isCommentSending;

export const selectVisibleComments = createSelector(
  [selectComments],
  (comments) => [...comments].reverse().slice(0, MAX_VISIBLE_COMMENTS)
);
