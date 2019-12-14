/* import {getCurrentTime} from './util.js'; */
const greeter = async (person) => {
    const { getCurrentTime } = await import('./util.js');
    console.log('util:', getCurrentTime);
    const currentTime = getCurrentTime();
    return "Hello, " + person + ', ' + currentTime;
};
export { greeter };
