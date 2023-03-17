let color = 'black'

function populateBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size
    for(let i = 0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colourSquare);
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input){
    if(input >=2 && input <= 100){
        populateBoard(input);
    }
    else{
        console.log('Too many squares')
    }
    
}


function colourSquare(){
    this.style.backgroundColor = color ;
}

function changeColour(choice){
    color = choice;
}


function randomRGB(){
    let red, green, blue;
    red = Math.floor(Math.random()* 256);
    green = Math.floor(Math.random()* 256);
    blue = Math.floor(Math.random()* 256);

    let color = `RGB(${red}, ${green}, ${blue})`
    return color 
}
