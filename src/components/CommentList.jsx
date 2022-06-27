import React from 'react';
import styled from 'styled-components';

const CommentList = ({ comment }) => {
  const { id, content } = comment;
  return (
    <Comment>
      <span className="id">{id}</span>
      <p className="content">{content}</p>
    </Comment>
  );
};

export default React.memo(CommentList);

const Comment = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 10px 7px 25px;
  .id {
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
  }
  .content {
    font-size: 13px;
  }
`;
