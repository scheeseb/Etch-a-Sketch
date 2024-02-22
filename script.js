const container = document.querySelector(".container");

function createColumn(quantity){
    for(i = 0; i < quantity; i++){
        const column = document.createElement("div");
        column.className = "column";
        container.append(column);
        
        for(s = 0; s < quantity; s++){
            const div = document.createElement("div");
            div.className = "gridBox";
            column.append(div);
        }
    }
}

function createDiv(quantity){
    for(i = 0; i < quantity; i++){
        const div = document.createElement("div");
        div.className = "gridBox";
        column.append(div);
    }
}

createColumn(16)
const box = document.querySelectorAll(".gridBox");
box.forEach(div => {
    div.addEventListener('mouseover', function() {
      div.style.backgroundColor = "red";
    });
  });


