import React, { useState } from 'react';
import styled from 'styled-components';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  const [comments, setComments] = useState([]);

  return (
    <>
      <Comments>
        {comments &&
          comments.map(({ id, comment }, index) => (
            <CommentList id={id} comment={comment} key={index} />
          ))}
      </Comments>
      <CommentInput comments={comments} setComment={setComments} />
    </>
  );
};

export default Comment;

const Comments = styled.div``;
