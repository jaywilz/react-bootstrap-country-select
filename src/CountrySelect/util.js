export const applyExclusionsAndAdditions = (countries, exclusions, additions) => {

  if (!exclusions && !additions) return countries;

  const excluded = (exclusions || []).reduce((acc, id) => ({ ...acc, [id]: true }), {});

  return [
    ...countries.filter(c => excluded[c.id] === undefined),
    ...(additions || []),
  ];

};

export const filter = (matchNameFromStart, matchAbbreviations) => inputText => {

  const regex = new RegExp(`${matchNameFromStart ? '^' : ''}${inputText}`, 'i');

  return matchAbbreviations
    ? ({ name, alpha2, alpha3, ioc }) => regex.test(name) || regex.test(alpha2) || regex.test(alpha3) || regex.test(ioc)
    : ({ name }) => regex.test(name);

};

export const getUpdatedList = (inputText, list, activeListItemIndex, countries, sort, matchNameFromStart, matchAbbreviations) => {

  const currentActiveCountry = list[activeListItemIndex];

  const countryFilter = filter(matchNameFromStart, matchAbbreviations)(inputText);

  const updatedList = sort ? [ ...countries.filter(countryFilter).sort(sort) ] : [ ...countries.filter(countryFilter) ];

  let newActiveCountryIndex = -1;

  if (updatedList.length === 1) {

    newActiveCountryIndex = 0;

  } else if (currentActiveCountry) {

    const index = updatedList.findIndex(country => country.id === currentActiveCountry.id);

    newActiveCountryIndex = Number.isFinite(index) ? index : -1;

  }

  return [
    updatedList,
    newActiveCountryIndex,
  ];

};

export const areEqual = (v1, v2) => (!v1 && !v2) || (v1 && v2 && ((v1.id && v2.id && v1.id === v2.id) || v1 === v2));

const EMOJI_FLAG_REGEX = /^[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/;

export const isEmojiFlag = str => EMOJI_FLAG_REGEX.test(str);

export const removeEmojiFlag = str => str.replace(EMOJI_FLAG_REGEX, '');

export const classNames = items => items.filter(item => !!item).join(' ');
