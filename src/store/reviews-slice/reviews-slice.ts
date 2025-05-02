import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewsState } from '../../types/state';
import { NameSpace } from '../../const';
import { CommentDto } from '../../types/types';
import { fetchCommentsOfferData, sendCommentAction } from '../api-actions';

const initialState: ReviewsState = {
  isCommentSending: false,
  comments: [],
  isDataLoading: false,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<CommentDto[]>) => {
      state.comments = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsOfferData.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchCommentsOfferData.fulfilled, (state, action) => {
        state.comments = action.payload.comments;

        state.isDataLoading = false;
      })
      .addCase(fetchCommentsOfferData.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(sendCommentAction.pending, (state) => {
        state.isCommentSending = true;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentSending = false;
      })
      .addCase(sendCommentAction.rejected, (state) => {
        state.isCommentSending = false;
      });
  },
});

export const { setComments } = reviewsSlice.actions;

export default reviewsSlice;
