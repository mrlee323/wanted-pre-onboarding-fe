import React, { useState } from 'react';
import styled from 'styled-components';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  const [comment, setComment] = useState([]);

  return (
    <>
      <Comments>
        {comment &&
          comment.map((data, index) => (
            <CommentList comment={data} key={index} />
          ))}
      </Comments>
      <CommentInput comment={comment} setComment={setComment} />
    </>
  );
};

export default Comment;

const Comments = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
