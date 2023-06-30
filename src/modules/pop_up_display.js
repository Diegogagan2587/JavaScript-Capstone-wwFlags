import getComments from './pop_up_comments_get.js'; // will return an array with objets
import postComments from './pop_up_comments_add.js';
import commentsCounter from './pop_up_comments_counter.js';

const setCardData = (countryName, imgUrl = '#', id, area, subRegion, population) => {
  const popUpCard = `
<div class="card">
  <button type="button" class="close-pop-up">X</button>
  <img src="${imgUrl}" alt="description here">
  <h3>${countryName}</h3>
  <div class="characteristics">
      <span class="element">${id}</span>
      <span class="element">${area}</span>
      <span class="element">${subRegion}</span>
      <span class="element">${population}</span>
  </div>

  <div class="comments-box">
    <h3>Comments<span id="comments-counter"></span></h3>
    <ul class="comments-list">
      <li>
          <span class="date">03/11/2021</span>
          <span class="user">Alex Marin :</span>
          <span class="comment">I'd love to buty it!</span>
      </li>
    </ul>
  </div>

  <form class="add-comments">
    <input type="text" placeholder="Your name" id="your-name" >
    <textarea placeholder="Your Insights" id="input-your-comments"></textarea>
    <button type="button" class="submit-comment-btn">Comment</button type="button">
  </form>
</div>
`;
  return popUpCard;
};

const popUpFather = document.querySelector('.pop-up');

const displayPopUp = async (event) => {
  const cardContainer = event.target.parentNode;
  const countryName = cardContainer.querySelector('.conutryName').innerText;
  const imageURL = cardContainer.querySelector('.countryFlag-img').src;
  const area = cardContainer.querySelector('.itemliSecond').innerText;
  const subRegion = cardContainer.querySelector('.itemlithird').innerText;
  const population = cardContainer.querySelector('.itemliforth').innerText;
  const comments = await getComments(countryName);

  const popUpCard = setCardData(countryName, imageURL, countryName, area, subRegion, population);

  popUpFather.innerHTML = popUpCard;

  const closePopUpButton = popUpFather.querySelector('.close-pop-up');
  const commentsContainer = popUpFather.querySelector('.comments-list');

  if (comments.error) {
    popUpFather.querySelector('.comments-list').innerHTML = '<p>No Comments So far</p>';
  } else {
    comments.forEach((element) => {
      const newComment = document.createElement('li');
      newComment.innerHTML = `
      <span class="date">${element.creation_date}</span>
      <span class="user">${element.username} :</span>
      <span class="comment">${element.comment}</span>
      `;
      commentsContainer.appendChild(newComment);
    });
  }
  /* start commeents counter */
  const commentsCountercontainer = document.querySelector('#comments-counter');
  const counter = document.createElement('span');
  const commentsList = document.querySelectorAll('.comments-list li');
  counter.innerText = `(${commentsCounter(commentsList)})`;
  commentsCountercontainer.appendChild(counter);
  /* finish comments counter */

  const submitCommentButton = popUpFather.querySelector('.submit-comment-btn');

  popUpFather.classList.remove('hide');

  closePopUpButton.addEventListener('click', () => {
    popUpFather.classList.add('hide');
  });

  submitCommentButton.addEventListener('click', (event) => {
    const itemID = countryName;
    const user = event.target.parentNode.querySelector('#your-name').value;
    const comment = event.target.parentNode.querySelector('#input-your-comments').value;
    const commentsBox = event.target.parentNode.parentNode.querySelector('.comments-box').querySelector('.comments-list');
    postComments(itemID, user, comment, commentsBox);
  });
};

export { displayPopUp, setCardData };