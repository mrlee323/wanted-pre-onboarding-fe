import React from 'react';
import styled from 'styled-components';

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

const CommentList = ({ data }) => {
  const { id, content } = data;

  return (
    <Comment>
      <span className="id">{id}</span>
      <p className="content">{content}</p>
    </Comment>
  );
};

export default CommentList;
