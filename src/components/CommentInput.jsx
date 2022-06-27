import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const CommentInput = (props) => {
  const { setComment } = props;
  const input_ref = useRef();

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
    <Form onSubmit={onSubmit}>
      <div>
        <AccountCircleOutlinedIcon />
        <Input type="text" ref={input_ref} placeholder="댓글달기..." />
      </div>
      <Button type="submit">게시</Button>
    </Form>
  );
};

export default CommentInput;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 300px;
  margin-left: 10px;
  @media (max-width: 650px) {
    width: 210px;
  }
`;

const Button = styled.button`
  background-color: #fff;
  font-weight: 600;
  color: #0095f6;
  cursor: pointer;
`;
