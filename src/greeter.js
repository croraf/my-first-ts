/* import {getCurrentTime} from './util.js'; */
const greeter = async (person) => {
    /* const util: any = await import('./util.js'); */
    console.log('rafa');
    const currentTime = 5; /* util.getCurrentTime(); */
    return "Hello, " + person + ', ' + currentTime;
};
export { greeter };
