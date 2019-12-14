import {greeter} from './greeter.js';

const main = async () => {
  const user = 'Rafa';

  document.title = await greeter(user);
};

main();

