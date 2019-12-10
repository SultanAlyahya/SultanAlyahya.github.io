var wood=0
var rock=0
var iron=0
var freeze=true
var timeInterval = true

//=======================================================method to add one more wood
$("#treeImg").click(()=>{
    if(wood < 5 && freeze){
        freeze=false
        console.log("done")
        console.log(wood)
        collectionFree("wood")
        setTimeBar(20)
    }

})

//=======================================================method to add one more rock
$("#rockImg").click(()=>{
    if(rock < 5 && freeze){
        freeze=false
        console.log("done")
        $("#rock").text("Rock= "+rock);
        console.log(rock)
        collectionFree("rock")
        setTimeBar(20)
    }
})

//=======================================================method to add one more iron
$("#ironImg").click(()=>{
    if(iron < 5 && freeze){
        freeze=false
        console.log("done")
        $("#Iron").text("Iron= "+iron);
        console.log(iron)
        collectionFree("iron")
        setTimeBar(20)
    }
})

//===============this code will free the collection methods until the current collection finish
const collectionFree =(item)=>{
    setTimeout(()=>{
        if(item == "wood"){
            wood++
            $("#wood").text("Wood= "+wood);
        }    
        if(item == "rock"){
            rock++
            $("#rock").text("Rock= "+rock);
        }    
        if(item == "iron"){
            iron++
            $("#Iron").text("Iron= "+iron);
        }
        freeze=true
    },2000)
}

const setTimeBar=(time)=>{

    if(timeInterval){
        timeInterval=false
        var timeBar=$("#timeBar")
        timeBar.css({
            "width":0+"%",
            "background-color":"green"
        })
        var width = 0
        var clear = setInterval(() => {
            if(width != 100 && !displayCost){
                width++
                timeBar.css("width",width+"%")
                timeBar.text(width+"%")
            }
            else{
                timeInterval=true
                clearInterval(clear);
            }
        }, time);
    }
}

