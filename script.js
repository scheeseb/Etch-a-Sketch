const container = document.querySelector(".container");
const sizingButton = document.querySelector("#sizing-button");
const resetButton = document.querySelector("#reset-button");

createGrid(16);
colorGrid();

sizingButton.addEventListener("click", function(){
    let selectedGridSize = Math.floor(prompt("Enter a Number 1-100 to build a grid"))

    if(selectedGridSize && selectedGridSize <= 100 && selectedGridSize > 0){
        removeOldGrid();
        createGrid(selectedGridSize);
        colorGrid();
    }
    else{
        alert("That's not a valid number!")
    }
})

resetButton.addEventListener("click", function(){
    const box = document.querySelectorAll(".gridBox");

    box.forEach(div => {
          div.style.backgroundColor = "hsl(0, 0%, 80%)";
        });
})



function createGrid(quantity){
    const container = document.createElement("div");
    container.className = "container";
    document.body.append(container)

    for(i = 0; i < quantity; i++){
        const row = document.createElement("div");
        row.className = "row";
        container.append(row);
        
        for(s = 0; s < quantity; s++){
            const div = document.createElement("div");
            div.className = "gridBox";
            row.append(div);
        }
    }
}
function colorGrid(){
    const box = document.querySelectorAll(".gridBox");
    let colorChoice = (Math.floor(Math.random()*356)).toString();

    box.forEach(div => {
        div.addEventListener('mouseover', function() {
          div.style.backgroundColor = "hsl("+ colorChoice +", 88%, 40%)";
        });
      });
}
function removeOldGrid(){
    let oldContainer = document.querySelector(".container");
    document.body.removeChild(oldContainer)
}