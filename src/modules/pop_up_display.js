console.log('pop up module is runing')

const setCardData = (countryName,imgUrl='#') => {
    const popUpCard = `
<div class="card">
<button type="button" class="close-pop-up">X</button>
<img src="${imgUrl}" alt="description here">
<h3>${countryName}</h3>
<div class="characteristics">
    <span class="element">Fuel: Titanium</span>
    <span class="element">Length: 100, 000</span>
    <span class="element">Weight: 400</span>
    <span class="element">Power: 100,000, 000</span>
</div>
</div>
`;
return popUpCard
}

const popUpFather = document.querySelector('.pop-up')

const displayPopUp = (event) => {
    console.log('runing displayPopUp')

    const cardContainer = event.target.parentNode.parentNode;
    const countryName = cardContainer.querySelector('.conutryName').innerText;
    const imageURL = cardContainer.querySelector('.countryFlag-img').src;
    const popUpCard = setCardData(countryName, imageURL);

    popUpFather.innerHTML = popUpCard;

    const closePopUpButton = popUpFather.querySelector('.close-pop-up')
    
    popUpFather.classList.remove('hide');
    
    closePopUpButton.addEventListener('click',() => {
        popUpFather.classList.add('hide');
    }) 
}

export {displayPopUp, setCardData} ;