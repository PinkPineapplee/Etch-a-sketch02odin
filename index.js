const div = document.querySelector(".container");

// function to create grid
function createGrid(){

const numGrid = Number(prompt("choose a number from 1-100 to create a new grid!"));
    let squared = numGrid * numGrid;
     for (i = 0; i < squared; i++){
         let grid = document.createElement("div")
     }

     try{
       if(numGrid.isNAN){
        throw("please write a digit number?")
       }
     }catch(error){
       alert(error);
       console.log("Error:" + error)
       createGrid()
     }
}