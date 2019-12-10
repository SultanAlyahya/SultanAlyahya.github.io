//=====================this method check if block is available and change the background-color
const checkFor_AvailableSpot=(a,s)=>{
if(availableArea[a][s]){
    $(`#a${a}s${s}`).css('background-color','green')
    canCreate=true
}
else{
    canCreate=false
}
}
//===============================this method change the backround-color to the original
const oneBlockgMouseOut=(a,s)=>{
    if(availableArea[a][s]){
        $(`#a${a}s${s}`).css('background-color','gray')
    }
}