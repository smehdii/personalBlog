interface Error {
  path: string;
  message: string;
}

export const normalizeErrors = (errors: Error[]) => {
  const errMap: { [key: string]: string } = {};
  errors.forEach(e => {
    errMap[e.path] = e.message;
  });
  return errMap;
};
