import React, { useCallback, useRef, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styled from 'styled-components';

const CommentInputContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  div {
    display: flex;
    align-items: center;
    input {
      margin-left: 10px;
    }
  }
  button {
    background-color: #fff;
    font-weight: 600;
    color: #0095f6;
  }
`;

const CommentInput = (props) => {
  const input_ref = useRef();
  const { comment, setComment } = props;
  const email = JSON.parse(localStorage.getItem('user')).email;
  const index = email.search(/@/);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const value = input_ref.current.value;
    if (value === '') return alert('내용을 입력해주세요');
    setComment((comment) => [
      ...comment,
      { id: email.slice(0, index), content: value },
    ]);
    e.target.reset();
  }, []);

  return (
    <CommentInputContainer onSubmit={onSubmit}>
      <div>
        <AccountCircleOutlinedIcon />
        <input type="text" ref={input_ref} placeholder="댓글달기..." />
      </div>
      <button type="submit">게시</button>
    </CommentInputContainer>
  );
};

export default CommentInput;
