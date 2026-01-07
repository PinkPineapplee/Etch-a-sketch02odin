const div = document.querySelector(".container");

// function to create grid
function createGrid(){
let grid;
const numGrid = Number(prompt("choose a number from 1-100 to create a new grid!"));
    let squared = numGrid * numGrid;
     for (i = 0; i < squared; i++){
         grid = document.createElement("div");
         grid.className= "box"
         grid.setAttribute("style", "height: 100%;", "width: 100%;", "color: white;" )
     }

     try{
       if(numGrid.isNAN){
        throw("please write a digit number?")
       }
     }catch(error){
       alert(error);
       console.log("Error:" + error)
      
     }
}


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