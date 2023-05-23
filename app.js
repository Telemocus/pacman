const board = ["pink","blue","green","red","purple","orange"];
const myBoard = [];
const ghosts= [];
const g = { //An Object
    x:"",
    y:"",
    h:100,          //properties
    size:25,
    ghost:6,
    inplay:false,
} 

const player = { //An Object
    pos:20,
    speed:4,        //properties
    cool:0,
    pause:false,
}

document.addEventListener("DOMContentLoaded",()=>{
    g.grid = document.querySelector(".grid");           
    g.pacman = document.querySelector(".pacman");
    g.eye = document.querySelector(".eye");             //This is the gameboard
    g.mouth = document.querySelector(".mouth");
    g.ghost = document.querySelector(".ghost");
    g.ghost.style.display = "none";
    console.log(g);
})
