import React from 'react';

const MailInput = (props) => {
  const { onChange, isValidation } = props;
  return (
    <input
      type="text"
      name="email"
      placeholder="이메일"
      onChange={onChange}
      style={{ borderColor: isValidation !== '' && !isValidation && 'red' }}
    />
  );
};

export default MailInput;
