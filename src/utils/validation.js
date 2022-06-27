const validation = (type, value) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/;

  const emailValidation = type === 'email' && emailRegex.test(value);
  const passwordValidation = type === 'password' && passwordRegex.test(value);

  return type === 'email' ? emailValidation : passwordValidation;
};

export default validation;
