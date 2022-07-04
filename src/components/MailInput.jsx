import React from 'react';
import styled, { css } from 'styled-components';

const MailInput = (props) => {
  const { onChange, isValidation } = props;
  return (
    <Input
      type="text"
      id="email"
      placeholder="이메일"
      onChange={onChange}
      isValidation={isValidation}
    />
  );
};

export default React.memo(MailInput);

const Input = styled.input`
  display: block;
  height: 40px;
  width: 270px;
  border: 1px solid
    ${({ isValidation }) =>
      isValidation !== '' && !isValidation ? 'red' : '#ccc'};
  border-radius: 5px;
  background-color: #fafafa;
  margin: 10px auto;
  padding-left: 5px;
`;
