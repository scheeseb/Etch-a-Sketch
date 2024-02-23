const container = document.querySelector(".container");

function createGrid(quantity){
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

createGrid(64)

const box = document.querySelectorAll(".gridBox");
// Add the hover Effect to all boxs
box.forEach(div => {
    div.addEventListener('mouseover', function() {
      div.style.backgroundColor = "red";
    });
  });


