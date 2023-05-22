import React, { createContext } from 'react';
import { CommentType } from '../../../types/comment.types';
export interface CommentContextProps {
  commentList: CommentType[];
  setCommentList: React.Dispatch<React.SetStateAction<CommentType[]>>;
}

const CommentContext = createContext<CommentContextProps | undefined>(
  undefined
);

export default CommentContext;
