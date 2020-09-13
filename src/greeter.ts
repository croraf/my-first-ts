
const greeter = async (person: string) => {
  const {getCurrentTime} = await import('./utils/util.js');
  console.log('util:', getCurrentTime);
  const currentTime: number = getCurrentTime();
  return "Hello, " + person + ', ' + currentTime;
}

export {greeter};
