const cardItemCounter = async (cardElements) => {
  if (!cardElements) {
    return 0;
  }
  const itemAmount = cardElements.length;
  return itemAmount;
};

export default cardItemCounter;