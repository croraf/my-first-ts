import {getCurrentTime} from './utils/util';

const greeter = async (person: string) => {
  /* const {getCurrentTime} = await import('./utils/util'); */
  console.log('util:', getCurrentTime);
  const currentTime: number = getCurrentTime();
  return "Hello, " + person + ', ' + currentTime;
}

export {greeter};
