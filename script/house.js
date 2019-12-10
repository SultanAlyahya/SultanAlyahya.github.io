var yy="Hello"

var listOfElemnts_BeingDetected=null

//===============================this method check if the 4 block around are available
const checkForAvailable_BuildingArea =(a,s)=>{
    listOfElemnts_BeingDetected=[$(`#a${a}s${s}`)]
          var xAxisCheck = a!=0
          var yAxisCheck = s!=9
          var availableCondition=availableArea[a][s]
          if(xAxisCheck){
            listOfElemnts_BeingDetected.push($(`#a${a-1}s${s}`))
            availableCondition=availableCondition && availableArea[a-1][s]
          }
          else{
            availableCondition=false
          }
          if(yAxisCheck){
            listOfElemnts_BeingDetected.push($(`#a${a}s${s+1}`))
            availableCondition=availableCondition && availableArea[a][s+1]
        }
        else{
          availableCondition=false
        }
          if(xAxisCheck && yAxisCheck){
            listOfElemnts_BeingDetected.push($(`#a${a-1}s${s+1}`))
            availableCondition=availableCondition && availableArea[a-1][s+1]
        }
        else{
          availableCondition=false
        }

        houseBuilding(a,s,listOfElemnts_BeingDetected,availableCondition)
}
//===============================this method change the backround-color based on it's availability
const houseBuilding =(a,s,listOfElemnts_BeingDetected,availableCondition)=>{

    try{
       
       if(availableCondition){
        console.log(availableCondition)
        listOfElemnts_BeingDetected.forEach(element => {
            element.css('background-color','green')
        });
        canCreate=true 
       }else{
        console.log(availableCondition) 
        listOfElemnts_BeingDetected.forEach(element => {
            element.css('background-color','red')
        });
        canCreate=false
       }
    }catch(e){
        console.log(false)
        listOfElemnts_BeingDetected.forEach(element => {
            element.css('background-color','red')
        });
        canCreate=false
    }
       
   }
//===============================this method change the backround-color to the original
const buildingMouseOut=(a,s)=>{
    if(availableArea[a][s])
            $(`#a${a}s${s}`).css('background-color','gray')
        if(s != 9 && availableArea[a][s+1])
            $(`#a${a}s${s+1}`).css('background-color','gray')
        if(a != 0 && availableArea[a-1][s])
            $(`#a${a-1}s${s}`).css('background-color','gray')
        if(a != 0 && s != 9 && availableArea[a-1][s+1])
            $(`#a${a-1}s${s+1}`).css('background-color','gray')
}