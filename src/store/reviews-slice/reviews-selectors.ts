import { RootState } from '..';
import { NameSpace } from '../../const';

export const selectComments = (state: RootState) => state[NameSpace.Reviews].comments;

export const selectCommentsLoading = (state: RootState) => state[NameSpace.Reviews].isDataLoading;

export const selectCommentSending = (state: RootState) => state[NameSpace.Reviews].isCommentSending;
