import './style.css';
import './style/pop-up.css'
import { displayPopUp } from './modules/pop_up_display.js';

const getCountries = async () => {
  const ingredients = 'https://restcountries.com/v3.1/all?fields=name,capital,area,population,subregion,flags';
  const response = await fetch(ingredients);
  const json = await response.json();
  const data = json.slice(0, 100);
  return data;
};

const displayCard = async () => {
  try {
    const subData = await getCountries(); // Wait for the Promise to resolve and get the subData
    const mainGeneralContainer = document.querySelector('.main-general-container');
    for (let i = 0; i < subData.length; i += 1) {
      const cardContainer = document.createElement('div');
      cardContainer.className = 'cardContainer';

      const countryFlag = document.createElement('img');
      countryFlag.className = 'countryFlag-img';

      const nameLike = document.createElement('div');
      nameLike.className = 'nameLike';

      const commentsBox = document.createElement('div');
      commentsBox.className = 'commentsBox';

      const likeBtn = document.createElement('button');
      likeBtn.className = 'conutryName';

      const commentBtn = document.createElement('button');
      commentBtn.className = 'commentBtn';
      commentBtn.addEventListener('click', displayPopUp);

      const countryName = document.createElement('p');
      countryName.className = 'conutryName';

      const likeIcon = document.createElement('ion-icon');
      likeIcon.className = 'likeIcon';

      const itemList = document.createElement('ul');
      itemList.className = 'itemList';
      itemList.classList.add('display-none');

      const itemliZero = document.createElement('li');
      itemliZero.className = 'itemliFirst';

      const itemliSecond = document.createElement('li');
      itemliSecond.className = 'itemliSecond';

      const itemlithird = document.createElement('li');
      itemlithird.className = 'itemlithird';

      const itemliforth = document.createElement('li');
      itemliforth.className = 'itemliforth';

      countryName.textContent = `Name: ${subData[i].name.common}`;

      likeIcon.setAttribute('name', 'heart-outline');

      likeBtn.textContent = 'LIKE';
      commentBtn.textContent = 'COMMENTS';

      countryFlag.src = subData[i].flags.svg; // Access the flag URL from the current subData item

      itemliZero.textContent = `Id: ${i + 1}`;

      itemliSecond.textContent = `Area: ${subData[i].area}`;

      itemlithird.textContent = `Subregion: ${subData[i].subregion} `;

      itemliforth.textContent = `Population: ${subData[i].population}`;

      cardContainer.append(countryFlag);

      nameLike.append(countryName);
      nameLike.append(likeIcon);

      commentsBox.append(likeBtn);
      commentsBox.append(commentBtn);

      itemList.appendChild(itemliZero);
      itemList.appendChild(itemliSecond);
      itemList.appendChild(itemlithird);
      itemList.appendChild(itemliforth);

      cardContainer.append(nameLike);
      cardContainer.append(commentsBox);
      cardContainer.append(itemList);
      mainGeneralContainer.append(cardContainer);
    } return mainGeneralContainer;
  } catch (error) {
    return error;
  }
};

displayCard(); // Call the function without exporting it
