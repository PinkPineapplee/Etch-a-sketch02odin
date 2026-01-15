const container = document.querySelector(".container");
const btns = document.querySelectorAll("button");
const box = document.querySelector("div.box")
let grid;



//function to create Grid
function createGrid(){    
const numGrid = Number(prompt("choose a number from 1-100 to create a new grid!"));

let squared = numGrid ** 2;
    
     for (i = 0; i < squared; i++){
         grid = document.createElement("div");
         grid.className="box";
         grid.id = `div${i};` 
         container.appendChild(grid);   
     }

     try{
       if(numGrid.isNAN){
        throw("please write a digit number?")
       }
     }catch(error){
       alert(error);
       console.log("Error:" + error)
      
     }
     return grid
}createGrid()

// function to create random hex number
function generateRandomHex(){
    let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
   
    let randomNum = function(){
      let randomNum 
      let numberValue   
        
          randomNum = Math.floor(Math.random() * num.length);
          numberValue = num[randomNum];
          console.log(numberValue);
         return numberValue;
       
        }
        let randomSix = function(){
          let sixDigits = "";
          for(i = 0; i < 6; i++){
            sixDigits += randomNum()
         }
         return sixDigits;
       }
    let randomColor = "#" + randomSix();
    console.log(randomColor)
    return randomColor;        
    }
console.log(generateRandomHex())


function draw(){
 
btns.forEach((button) => {
 
  button.addEventListener("click", () => {
   
     box.addEventListener("mouseover", handleColorChange)
     console.log(button.id);

    
  });
});
}draw()

 function handleColorChange(e){
          
        if(button.id === "black"){
          e.target.style.backgroundColor = "black";
          console.log("I am painting black.")
        }else if (button.id === "color"){
          e.target.style.backgroundColor = generateRandomHex;
          console.log("I am painting colour.")
        }else if(button.id === "eraser"){
          e.target.style.backgroundColor = "white";
          console.log("I am erasing.")
        }else if (button.id === "reset"){
          e.target.style.backgroundColor = "white";
          console.log("I am reset button.")
        }
     }