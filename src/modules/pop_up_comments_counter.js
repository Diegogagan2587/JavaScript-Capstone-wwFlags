const commentsCounter = () => {
  let result = 0;
  const comments = document.querySelectorAll('.comments-list li');
  if (!comments) { return 0; }
  result = comments.length;

  return result;
};

export default commentsCounter;