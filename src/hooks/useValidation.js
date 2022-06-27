import React, { useCallback, useState } from 'react';
import validation from '../utils/validation';

const useValidation = (email_ref, password_ref) => {
  const [isValidation, setIsValidation] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') email_ref.current = value;
    else password_ref.current = value;

    setIsValidation((isValidation) => ({
      ...isValidation,
      [name]: validation(name, value),
    }));
  };

  return { isValidation, onChange };
};

export default useValidation;
