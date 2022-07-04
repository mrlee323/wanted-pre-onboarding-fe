import { useState } from 'react';
import validation from '../utils/validation';

const useValidation = (email_ref, password_ref) => {
  const [isValidation, setIsValidation] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { id, value } = e.target;

    id === 'email'
      ? (email_ref.current = value)
      : (password_ref.current = value);

    if (isValidation[id] === '')
      setIsValidation((isValidation) => ({ ...isValidation, [id]: false }));

    if (isValidation[id] === validation(id, value)) return;

    setIsValidation((isValidation) => ({
      ...isValidation,
      [id]: validation(id, value),
    }));
  };

  return { isValidation, onChange };
};

export default useValidation;
