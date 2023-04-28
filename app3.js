window.addEventListener('click', (e) => {
    e = e || window.event;
    const flippedCard = document.getElementById(e.target.id);
    if (flippedCard.id == 'card1'){
        flippedCard.parentElement.style.transform = "rotateY(180deg)";
    } 
    if(flippedCard.id == 'card1F'){
        flippedCard.parentElement.style.transform = "rotateY(0deg)";
    }
    if (flippedCard.id == 'card2'){
        flippedCard.parentElement.style.transform = "rotateY(180deg)";
    } 
    if(flippedCard.id == 'card2F'){
        flippedCard.parentElement.style.transform = "rotateY(0deg)";
    }
    if (flippedCard.id == 'card3'){
        flippedCard.parentElement.style.transform = "rotateY(180deg)";
    } 
    if(flippedCard.id == 'card3F'){
        flippedCard.parentElement.style.transform = "rotateY(0deg)";
    }
    if (flippedCard.id == 'card4'){
        flippedCard.parentElement.style.transform = "rotateY(180deg)";
    } 
    if(flippedCard.id == 'card4F'){
        flippedCard.parentElement.style.transform = "rotateY(0deg)";
    }
    console.log(flippedCard);
    
    });
    document.getb