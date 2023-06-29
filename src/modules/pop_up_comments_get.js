const appID = 'yY6kfgXjWJt5yNZEfFYH';

const getComments = async (itemID) => {
  const urlFromAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=item${itemID}`;
  const request = await fetch(urlFromAPI);
  const response = await request.json();
  return response;
};

export default getComments;
