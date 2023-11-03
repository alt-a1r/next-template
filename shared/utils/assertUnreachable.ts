const assertUnreachable = (x: never): never => {
  throw new Error(`Didn't expect to get here with ${x as string}`);
};

export default assertUnreachable;
