export const filter = (matchNameFromStart, matchAbbreviations) => inputText => {

  const regex = new RegExp(`${matchNameFromStart ? '^' : ''}${inputText}`, 'i');

  return matchAbbreviations
    ? ({ name, alpha2, alpha3, ioc }) => regex.test(name) || regex.test(alpha2) || regex.test(alpha3) || regex.test(ioc)
    : ({ name }) => regex.test(name);

};

export const sort = sortBy => (a, b) => a[sortBy] < b[sortBy] ? -1 : 1;
