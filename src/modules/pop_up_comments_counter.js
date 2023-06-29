const commentsCounter = (nodeList) => {
  let result = 0;
  if (!nodeList) { return 0; }
  result = nodeList.length;
  return result;
};

export default commentsCounter;