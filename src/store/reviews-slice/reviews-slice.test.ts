import { reviewsSlice, setComments } from './reviews-slice';
import { fetchOfferComments, sendComment } from '../api-actions';
import { describe, it, expect } from 'vitest';
import { mockComments } from '../../mock/test-data';

describe('reviewsSlice', () => {
  it('should return initial state when passed an unknown action', () => {
    const result = reviewsSlice.reducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(result).toEqual(reviewsSlice.getInitialState());
  });

  it('should handle setComments', () => {
    const state = reviewsSlice.reducer(undefined, setComments(mockComments));
    expect(state.comments).toEqual(mockComments);
  });

  it('should handle fetchOfferComments.pending', () => {
    const state = reviewsSlice.reducer(undefined, { type: fetchOfferComments.pending.type });
    expect(state.isDataLoading).toBe(true);
  });

  it('should handle fetchOfferComments.fulfilled', () => {
    const action = {
      type: fetchOfferComments.fulfilled.type,
      payload: { comments: mockComments },
    };
    const state = reviewsSlice.reducer(undefined, action);
    expect(state.comments).toEqual(mockComments);
    expect(state.isDataLoading).toBe(false);
  });

  it('should handle fetchOfferComments.rejected', () => {
    const state = reviewsSlice.reducer(undefined, { type: fetchOfferComments.rejected.type });
    expect(state.isDataLoading).toBe(false);
  });

  it('should handle sendComment.pending', () => {
    const state = reviewsSlice.reducer(undefined, { type: sendComment.pending.type });
    expect(state.isCommentSending).toBe(true);
  });

  it('should handle sendComment.fulfilled', () => {
    const action = {
      type: sendComment.fulfilled.type,
      payload: mockComments,
    };
    const state = reviewsSlice.reducer(undefined, action);
    expect(state.comments).toEqual(mockComments);
    expect(state.isCommentSending).toBe(false);
  });

  it('should handle sendComment.rejected', () => {
    const state = reviewsSlice.reducer(undefined, { type: sendComment.rejected.type });
    expect(state.isCommentSending).toBe(false);
  });
});
