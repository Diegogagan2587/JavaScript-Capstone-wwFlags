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
  <h3>Comments</h3>
  <ul class="comments-list">
    <li>
        <span class="date">03/11/2021</span>
        <span class="user">Alex Marin :</span>
        <span class="comment">I'd love to buty it!</span>
    </li>
    <li>
    <span class="date">03/12/2021</span>
    <span class="user"> Mia Maring :</span>
    <span class="comment">I'd love  it!</span>
</li>
  <ul>
<div>
</div>
`;
  return popUpCard;
};

const popUpFather = document.querySelector('.pop-up');

const displayPopUp = (event) => {
  const cardContainer = event.target.parentNode.parentNode;

  const countryName = cardContainer.querySelector('.conutryName').innerText;
  const imageURL = cardContainer.querySelector('.countryFlag-img').src;
  const id = cardContainer.querySelector('.itemliFirst').innerText;
  const area = cardContainer.querySelector('.itemliSecond').innerText;
  const subRegion = cardContainer.querySelector('.itemlithird').innerText;
  const population = cardContainer.querySelector('.itemliforth').innerText;

  const popUpCard = setCardData(countryName, imageURL, id, area, subRegion, population);

  popUpFather.innerHTML = popUpCard;

  const closePopUpButton = popUpFather.querySelector('.close-pop-up');

  popUpFather.classList.remove('hide');

  closePopUpButton.addEventListener('click', () => {
    popUpFather.classList.add('hide');
  });
};

export { displayPopUp, setCardData };