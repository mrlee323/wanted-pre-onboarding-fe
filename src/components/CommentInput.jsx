import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import useAuthenticated from '../hooks/useAuthenticated';

const CommentInput = (props) => {
  const { isAuthenticated } = useAuthenticated();
  const { setComment } = props;
  const input_ref = useRef();

  const index = isAuthenticated?.email.search(/@/);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    const value = input_ref.current.value;
    if (value === '') return alert('내용을 입력해주세요');

    setComment((comments) => [
      ...comments,
      { id: email.slice(0, index), comment: value },
    ]);

    e.target.reset();
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <InputWrap>
        <AccountCircleOutlinedIcon />
        <Input type="text" ref={input_ref} placeholder="댓글달기..." />
      </InputWrap>
      <Button type="submit">게시</Button>
    </Form>
  );
};

export default React.memo(CommentInput);

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 13px;
  margin-top: 8px;
  border-top: ${({ theme }) => theme.border.sub};
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  margin-left: 10px;
  @media ${({ theme }) => theme.media.max} {
    width: 210px;
  }
`;

const Button = styled.button`
  background-color: #fff;
  font-weight: 600;
  color: ${({ theme }) => theme.color.active};
  cursor: pointer;
`;
