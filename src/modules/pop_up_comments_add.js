const appID = 'yY6kfgXjWJt5yNZEfFYH';

const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`;

const postComments = async (itemID, user, comment , container) => {
  const request = await fetch(commentsURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${itemID}`,
      username: user,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = request.status;// status should be 201 wich means comment was created
  const currentDate = 'Today';
  const newComment = document.createElement('li');
  newComment.innerHTML = `
  <span class="date">${currentDate}</span>
  <span class="user">${user} :</span>
  <span class="comment">${comment}</span>
  `;
  container.appendChild(newComment);
  return response;
};

export default postComments;