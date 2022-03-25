document.addEventListener("keydown", drawWithKey);

let key = {
    LEFT: 37, UP: 38, RIGHT: 39, DOWN:40
};

let box = document.getElementById("draw_area");
let paper = box.getContext("2d");

let x = 150;
let y = 150;
let linecolor = "blue";
let linemove = 10;

drawLine("red", x-1, y-1, x+1, y+1, paper);

function drawLine (color, xinit, yinit, xend, yend, paper)
{
    paper.beginPath();
    paper.strokeStyle = color;
    paper.lineWidth = 3;
    paper.moveTo(xinit, yinit);
    paper.lineTo(xend, yend);
    paper.stroke();
    paper.closePath();
}

function drawWithKey(event)
{
    
    switch (event.keyCode) 
    {
        case key.LEFT:
            drawLine(linecolor, x, y, x - linemove, y, paper);
            x = x - linemove;
        break;
        
        case key.UP:
            drawLine(linecolor, x, y, x, y - linemove, paper);
            y = y - linemove;
        break;

        case key.RIGHT:
            drawLine(linecolor, x, y, x + linemove, y, paper);
            x = x + linemove;
        break;

        case key.DOWN:
            drawLine(linecolor, x, y, x, y + linemove, paper);
            y = y + linemove;
        break;

        default:
        console.log("otra tecla");
        break;
    }
}