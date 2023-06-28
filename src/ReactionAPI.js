class ReactionAPI {
  constructor() {
    this.id = 'yY6kfgXjWJt5yNZEfFYH';
    this.baseURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.id}/`;
  }

  getLikeAmount = async (countryID) => {
    const all = await this.getAllLikeInfo();
    let result = await all.find((obj) => obj.item_id === countryID);
    result = parseInt(result.likes, 10);
    return result || 0;
  };

  getAllLikeInfo = async () => {
    const likes = await fetch(`${this.baseURL}likes`);
    const data = await likes.json();
    return [...data];
  };
}

export default ReactionAPI;