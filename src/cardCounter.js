const cardItemCounter = async (cardNumber) => {
  if (!cardNumber) {
    return 0;
  }
  const itemAmount = cardNumber.length;
  return itemAmount;
};

export default cardItemCounter();