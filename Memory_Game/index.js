console.log("fdfaf");
let clickedCard;
let pairs = 0;
let tries = 0;
function onCardClick(e){
    const target = e.currentTarget;
    if(target === clickedCard || target.className.includes('done')){
        return;
    }
    
    target.className = target.className.replace('color-hidden', '').trim();
    target.className += ' done';
    if(!clickedCard){
        clickedCard = target;
    }else{
        const color1 = clickedCard.getAttribute('data-color');
        const color2 = target.getAttribute('data-color');
        if(color1===color2){
            clickedCard = null;
            pairs++;
            if(pairs==8){
                alert('YOU WIN!!!');
            }
        }else{
            setTimeout(() => {
                clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
                target.className = target.className.replace('done', '').trim() + ' color-hidden';
                clickedCard = null;
            }, 500)
        }
        
    }

}