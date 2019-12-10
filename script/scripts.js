var blocks=0
var gridOnlock = false;
var canCreate = false;
var toCreate = ""

var ifBuilding_4_Blocks=document.getElementById('house')    

ifBuilding_4_Blocks.addEventListener("click",function(){
       
        displayGrid()
        blocks=4
        toCreate="house"
        displayGridAvtive()
})

var coop=document.getElementById('coop')   
coop.addEventListener("click",function(){
      
        displayGrid()
            blocks=4
            toCreate="coop"
            displayGridAvtive()
})

var oneBlock=document.getElementById('person')
oneBlock.addEventListener("click",function(){
            
        displayGrid()
            blocks=1
            toCreate="person"
            displayGridAvtive()
        
})
var stickx=document.getElementById('cow')
stickx.addEventListener("click",function(){
            
        displayGrid()
            blocks=2
            toCreate="cow"
            displayGridAvtive()
        
})
var sticky=document.getElementById('chicken')
sticky.addEventListener("click",function(){
            
        displayGrid()
            blocks=1
            toCreate="chicken"
            displayGridAvtive()
        
})

console.log(availableArea[0].length)
const displayGrid=()=>{
    for(var i=0; i<availableArea.length;i++){
        for(var j=0; j<availableArea[0].length;j++){
            var avail = `<div id='a${i}s${j}' class='available'></div>
            <script>
            document.getElementById("a${i}s${j}").addEventListener("mouseover", ()=>checkIfAvailable(${i},${j}))
            document.getElementById("a${i}s${j}").addEventListener("mouseout", ()=>mouseOut(${i},${j}));
            document.getElementById("a${i}s${j}").addEventListener("click", ()=>witchToCreate(${i},${j}));
            </script>
            `; 
            $("main").append(avail);
            var x=$(`#a${i}s${j}`)
            if(availableArea[i][j]==true){
            x.css({
                "width": "100%",
                "height": "100%",
                "background-color": "gray",
                "opacity": "0.5",
                "grid-column-start": i+1,
                "grid-column-end": i+2,
                "grid-row-start": j+1,
                "grid-row-end": j+2,
                "border-radius": "20px",
            })  
            }else{
                x.css({
                    "width": "100%",
                    "height": "100%",
                    "background-color": "red",
                    "opacity": "0.5",
                    "grid-column-start": i+1,
                    "grid-column-end": i+2,
                    "grid-row-start": j+1,
                    "grid-row-end": j+2,
                    "border-radius": "20px",
                })  
            }
        }
    }
}
    

   const checkIfAvailable =(a,s)=> {
      if(blocks == 4){
        checkForAvailable_BuildingArea(a,s)
      }
      else if(blocks == 1){
        checkFor_AvailableSpot(a,s)
      }
      else if(blocks == 2){
        checkFor_TwoBlocks(a,s)
      }
   }
   
   const mouseOut =(a,s)=> {
    if(blocks == 4){
        buildingMouseOut(a,s)
   }
   else if(blocks == 1){
        oneBlockgMouseOut(a,s)
    }
    else if(blocks == 2){
        TowBlocks_MouseOut(a,s)
    }
   }


   
    

    //===============this function is responsible of activate the display grid check

    const displayGridAvtive=()=>{
        $('.available').toggleClass('backToWork')
    }



    // $('.available').hover(()=> {
    //         // over
    //         $('.available').css('background-color','green')
    //     }, function () {
    //         // out
    //     }
    // );

    
    //<img id="house" src="https://img.favpng.com/11/2/19/log-cabin-house-cartoon-cottage-png-favpng-ehiepku6Ew6CCTeB8Hsavqn6S.jpg">