/* import {getCurrentTime} from './util.js'; */

const greeter = async (person: string) => {
  /* const util: any = await import('./util.js'); */
  console.log('rafa');
  const currentTime: number = 5;/* util.getCurrentTime(); */
  return "Hello, " + person + ', ' + currentTime;
}

export {greeter};
