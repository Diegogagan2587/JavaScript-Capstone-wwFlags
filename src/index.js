import './style.css';
import ReactionAPI from './ReactionAPI.js';
import './style/pop-up.css';
import { displayPopUp } from './modules/pop_up_display.js';

const getCountries = async () => {
  const countryAPI = 'https://restcountries.com/v3.1/all?fields=name,capital,area,population,subregion,flags';
  const response = await fetch(countryAPI);
  const json = await response.json();
  const data = json.slice(0, 99);
  return data;
};

const react = new ReactionAPI();
const displayCard = async (subData) => {
  try {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'cardContainer';

    const countryFlag = document.createElement('img');
    countryFlag.className = 'countryFlag-img';

    const nameLike = document.createElement('div');
    nameLike.className = 'nameLike';

    const likeBtn = document.createElement('button');
    likeBtn.className = 'conutryName';

    const commentBtn = document.createElement('button');
    commentBtn.className = 'commentBtn';

    const countryName = document.createElement('p');
    countryName.className = 'conutryName';
    
    const commentBtn = document.createElement('button');
    commentBtn.className = 'commentBtn';
    commentBtn.addEventListener('click', displayPopUp);


    const likeNumber = document.createElement('p');
    likeNumber.className = 'likeNumber';

    const likeIcon = document.createElement('ion-icon');
    likeIcon.className = 'likeIcon';

    const itemList = document.createElement('ul');
    itemList.className = 'itemList';
    itemList.classList.add('display-none');

    const itemliSecond = document.createElement('li');
    itemliSecond.className = 'itemliSecond';

    const itemlithird = document.createElement('li');
    itemlithird.className = 'itemlithird';

    const itemliforth = document.createElement('li');
    itemliforth.className = 'itemliforth';

    countryName.textContent = `Name: ${subData.name.common}`;

    likeIcon.setAttribute('name', 'heart-outline');

    const likeCount = await react.getLikeAmount(subData.name.common);
    if (likeCount) {
      likeNumber.innerText = `${likeCount} likes`;
    } else {
      likeNumber.textContent = 'no likes';
    }

    likeBtn.textContent = 'LIKE';

    commentBtn.textContent = 'COMMENTS';

    countryFlag.src = subData.flags.png; // Access the flag URL from the current subData item

    itemliSecond.textContent = `Area: ${subData.area}`;

    itemlithird.textContent = `Subregion: ${subData.subregion} `;

    itemliforth.textContent = `Population: ${subData.population}`;

    cardContainer.append(countryFlag);

    nameLike.append(countryName);
    nameLike.append(likeNumber);
    likeBtn.append(likeIcon);

    itemList.appendChild(itemliSecond);
    itemList.appendChild(itemlithird);
    itemList.appendChild(itemliforth);

    cardContainer.append(nameLike);
    cardContainer.append(likeBtn);
    cardContainer.append(commentBtn);
    cardContainer.append(itemList);
    return cardContainer;
  } catch (error) {
    return error;
  }
};

const displayAllCards = async () => {
  const mainGeneralContainer = document.querySelector('.main-general-container');
  const subData = await getCountries(); // Wait for the Promise to resolve and get the subData
  subData.forEach(async (country) => {
    const cardElement = await displayCard(country);
    if (cardElement) {
      mainGeneralContainer.appendChild(cardElement);
    }
  });
};

displayAllCards();
