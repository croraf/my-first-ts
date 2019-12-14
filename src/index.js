import { greeter } from './greeter.js';
const main = async () => {
    const user = 'Rafa';
    console.log('main');
    document.getElementById('root').textContent = await greeter(user);
};
main();
