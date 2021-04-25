// Structural types é a forma como o TypeScript considera as regras de tipagens.
// Ele não se importa muito com a assinatura do tipo, no caso o nome.
// Porém sim como o tipo está estruturado, no do user, com duas propriedades string.
// username e password, então qualquer objeto que tenha essas duas propriedades como string.
// Irão corresponder ao tipo, e o TypeScript não irá reclamar.
// Mesmo que tenham uma propriedade a mais.

type User = {
  username: string;
  password: string;
};

type VerifyUserFn = (user: User, sentUser: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentUser) => {
  return (
    user.username === sentUser.username && user.password === sentUser.password
  );
};

const dbUser = { username: 'Paulo', password: '123456' };
const sentUser = { username: 'Paulo', password: '123456', permission: false };
const loggedIn = verifyUser(dbUser, sentUser);

console.log(loggedIn);
