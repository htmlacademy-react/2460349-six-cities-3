import { describe, it, expect } from 'vitest';
import {
  selectComments,
  selectCommentsLoading,
  selectCommentSending,
  selectVisibleComments,
} from './reviews-selectors';
import { RootState } from '../../types/state';
import { CommentDto } from '../../types/comment-dto';
import { NameSpace } from '../../const';

const MAX_VISIBLE_COMMENTS = 10;

const mockComments: CommentDto[] = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  date: `2024-01-${i + 1}`,
  user: {
    name: `User ${i + 1}`,
    avatarUrl: `/img/user${i + 1}.jpg`,
    isPro: false,
  },
  comment: `Comment ${i + 1}`,
  rating: 4,
}));

const mockState = {
  [NameSpace.Reviews]: {
    comments: mockComments,
    isDataLoading: true,
    isCommentSending: false,
  },
} as unknown as RootState;

describe('Reviews selectors', () => {
  it('selectComments returns full list of comments', () => {
    expect(selectComments(mockState)).toEqual(mockComments);
  });

  it('selectCommentsLoading returns isDataLoading', () => {
    expect(selectCommentsLoading(mockState)).toBe(true);
  });

  it('selectCommentSending returns isCommentSending', () => {
    expect(selectCommentSending(mockState)).toBe(false);
  });

  it('selectVisibleComments returns latest N comments in reverse order', () => {
    const visible = selectVisibleComments.resultFunc(mockComments);
    expect(visible).toHaveLength(MAX_VISIBLE_COMMENTS);
    expect(visible[0].id).toBe('15');
    expect(visible[visible.length - 1].id).toBe('6');
  });
});
