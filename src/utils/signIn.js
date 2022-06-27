const users = [
  { email: 'mrlee3233@gmail.com', password: 'A_12345678' },
  { eamil: 'mrlee323@naver.com', password: 'B_87654321' },
];

const signIn = (email, password) => {
  console.log(email, password);
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
};

export default signIn;
