const container = document.querySelector(".container");
const btns = document.querySelectorAll("button");
let grid;



//function to create Grid
function createGrid(){    
const numGrid = Number(prompt("choose a number from 1-100 to create a new grid!"));

let squared = numGrid ** 2;
    
     for (i = 0; i < squared; i++){
         grid = document.createElement("div");
         grid.className="box";
         grid.id = `div${1};` 
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
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    console.log(button.id);

     if (button.id === "black"){
      grid.addEventListener("mouseover",(e)=>{ e.target.id.style.background = "black";})
     } else if (button.id === "color"){
      grid.addEventListener("mouseover",(e)=>{ e.target.id.style.background = generateRandomHex();})
     }
     else if (button.id === "reset"){
      grid.style.background = "white";
     }
  });
});
}draw()

