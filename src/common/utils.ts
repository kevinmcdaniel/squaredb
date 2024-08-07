export const flattenObject = (obj: any, prefix = ''): Record<string, any> => {

  const response = Object.keys(obj).reduce((acc: any, k: string) => {
    const pre = prefix.length ? prefix + '.' : '';

    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
      return acc;
    }

    acc[pre + k] = obj[k];

    return acc;
  }, {});

  return response;
};
