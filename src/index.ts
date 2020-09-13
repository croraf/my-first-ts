import {greeter} from './greeter.js';

const main = async () => {
  let user = 'Rafa3';
  console.log('main');
  console.log(document.getElementById('root').textContent = await greeter(user));

  return 5;
};

let x = main();

