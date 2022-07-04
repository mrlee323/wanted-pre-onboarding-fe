const users = [
  { email: 'mrlee3233@gmail.com', password: 'A_12345678' },
  { email: 'mrlee323@naver.com', password: 'B_87654321' },
  { email: 'olivia_33@gmail.com', password: 'SS__1234' },
];

const signIn = (email, password) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
};

export default signIn;
