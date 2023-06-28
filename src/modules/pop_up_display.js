console.log('pop up module is runing')

const setCardData = (countryName) => {
    const popUpCard = `
<div class="card">
<button type="button" class="close-pop-up">X</button>
<img src="https://img.freepik.com/free-photo/flat-lay-circular-food-frame_23-2148708223.jpg?w=740&t=st=1687833862~exp=1687834462~hmac=c80cdb82e16bac82d49763c95e1e2913f9abe094690fb691b94d490b643b3ada" alt="description here">
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
    const popUpCard = setCardData(countryName);
    
    popUpFather.innerHTML = popUpCard;

    const closePopUpButton = popUpFather.querySelector('.close-pop-up')
    
    popUpFather.classList.remove('hide');
    
    closePopUpButton.addEventListener('click',() => {
        popUpFather.classList.add('hide');
    }) 
}

export {displayPopUp, setCardData} ;