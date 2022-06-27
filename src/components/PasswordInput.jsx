import React from 'react';

const PasswordInput = (props) => {
  const { onChange, isValidation } = props;
  return (
    <input
      type="password"
      name="password"
      placeholder="비밀번호"
      onChange={onChange}
      style={{ borderColor: isValidation !== '' && !isValidation && 'red' }}
    />
  );
};

export default PasswordInput;
