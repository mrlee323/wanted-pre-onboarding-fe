import React from 'react';
import styled from 'styled-components';

const MailInput = (props) => {
  const { onChange, isValidation } = props;
  return (
    <Input
      type="text"
      name="email"
      placeholder="이메일"
      onChange={onChange}
      style={{ borderColor: isValidation !== '' && !isValidation && 'red' }}
    />
  );
};

export default MailInput;

const Input = styled.input`
  display: block;
  height: 40px;
  width: 270px;
  border: 1px solid #bbb;
  border-radius: 5px;
  background-color: #fafafa;
  margin: 10px auto;
  padding-left: 5px;
`;
