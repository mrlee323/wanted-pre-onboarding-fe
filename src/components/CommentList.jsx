import React from 'react';
import styled from 'styled-components';

const CommentList = ({ id, comment }) => {
  console.log(id, comment);
  return (
    <CommentWrap>
      <Id>{id}</Id>
      <Comment>{comment}</Comment>
    </CommentWrap>
  );
};

export default React.memo(CommentList);

const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 15px 7px 25px;
`;

const Id = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
`;

const Comment = styled.p`
  font-size: 13px;
  text-overflow: ellipsis;
`;
