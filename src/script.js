// grab everything

const crazyButtons = document.querySelectorAll('.btn-crazy');
const headerText = document.querySelector('#header-text');

// create the function

function goCrazy () {
    
    // get a random number for position
    
    let offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    let offsetTop = Math.random() * (window.innerHeight - this.clientHeight);
    
    // set a new position
    
    this.style.left = offsetLeft + 'px';
    this.style.top = offsetTop + 'px';
    
    // hide headerText
    
    headerText.style.opacity = '0';
}


let successClick = () => {
    alert('Congratulation !');
}

// add the event listener

crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));
crazyButtons.forEach(button => button.addEventListener('click', successClick));