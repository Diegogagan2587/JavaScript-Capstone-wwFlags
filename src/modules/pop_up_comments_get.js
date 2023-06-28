
const appID = 'yY6kfgXjWJt5yNZEfFYH';

const getComments = async (itemID) => {
    console.log('----------gettin comments-------------------')
    const urlFromAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=item${itemID}`;
    const request = await fetch(urlFromAPI);
    const response = await request.json();
    console.log(response)
}

export { getComments };

