const BtnEl = document.querySelector(".btn")
const nameEl = document.querySelector(".container h1")


function randomColor(){
    const latter = "01234ABCDEF56789";
    let color = "#";
    for (let i  = 0 ; i < 6; i++){
        color = color+Math.floor(Math.random()*16)
        colorNum = color+Math.floor(Math.random()*16).toString(16)
    }
    return color;
    
}
console.log(randomColor)

function ColorChange(){
    document.body.style.backgroundColor = randomColor()
    nameEl.innerHTML = `HexCode is ${colorNum}`
    
}
BtnEl.addEventListener("click",
    ColorChange
);