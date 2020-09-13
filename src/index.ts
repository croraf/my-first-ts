import {greeter} from './greeter';
import './second';

const main = async () => {
  let user = 'Rafa32';
  console.log('main');
  console.log(document.getElementById('root').textContent = await greeter(user));

  return 5;
};

main();

