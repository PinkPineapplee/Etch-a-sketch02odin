const container = document.querySelector(".container");
const btns = document.querySelectorAll("button");
const box = document.querySelector(".box")
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



function draw(){
 
btns.forEach((button) => {
 
  button.addEventListener("click", (e) => {
   let clicked = e.target;

function handleColorChange(click){
          let button = click;
        if(button.id === "black"){
           console.log(button.id);
           container.addEventListener("mouseover", (e)=>{
             e.target.style.backgroundColor = "black";
            
           })
           return;
         
        }else if (button.id=== "color"){
           console.log(button.id);
           container.addEventListener("mouseover", (e)=>{
             e.target.style.backgroundColor = generateRandomHex();
           })
         return;
          
        }else if(button.id === "eraser"){
           console.log(button.id);
           container.addEventListener("mouseover", (e)=>{
             e.target.style.backgroundColor = "white";
           })
         return;
        }else if (button.id === "reset"){
          
             box.style.backgroundColor = "white";
           
         return;
          
        }
     }

     
     handleColorChange(clicked)
  });
});
}draw()

 