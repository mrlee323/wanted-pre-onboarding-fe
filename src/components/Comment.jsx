import React, { useState } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  const [comment, setComment] = useState([]);

  return (
    <>
      <div
        style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}
      >
        {comment &&
          comment.map((data, index) => <CommentList data={data} key={index} />)}
      </div>
      <CommentInput comment={comment} setComment={setComment} />
    </>
  );
};

export default Comment;
