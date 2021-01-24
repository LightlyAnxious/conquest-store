const filterByValue = () => {};

const filterByTerms = (item, terms) => {
  let passedItem;
  if (!terms) {
    return null;
  }
  Object.entries(terms).forEach(entry => {
    const [key, value] = entry;
    if (item[key] === value) {
      /*eslint-disable*/
      passedItem = item;
    }
  });

  return passedItem;
};

export {filterByTerms};
