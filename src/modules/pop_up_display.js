console.log('pop up module is runing')

const setCardData = (countryName,imgUrl='#',id,area,subRegion, population) => {
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
</div>
`;
return popUpCard
}

const popUpFather = document.querySelector('.pop-up')

const displayPopUp = (event) => {
    console.log('runing displayPopUp')

    const cardContainer = event.target.parentNode.parentNode;
    console.log(cardContainer)
    const countryName = cardContainer.querySelector('.conutryName').innerText;
    const imageURL = cardContainer.querySelector('.countryFlag-img').src;
    const id = cardContainer.querySelector('.itemliFirst').innerText;
    const area = cardContainer.querySelector('.itemliSecond').innerText;
    const subRegion = cardContainer.querySelector('.itemlithird').innerText;
    const population = cardContainer.querySelector('.itemliforth').innerText;

    const popUpCard = setCardData(countryName, imageURL, id, area, subRegion, population);

    popUpFather.innerHTML = popUpCard;

    const closePopUpButton = popUpFather.querySelector('.close-pop-up')
    
    popUpFather.classList.remove('hide');
    
    closePopUpButton.addEventListener('click',() => {
        popUpFather.classList.add('hide');
    }) 
}

export {displayPopUp, setCardData} ;