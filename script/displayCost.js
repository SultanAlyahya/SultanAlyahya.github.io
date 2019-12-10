
var bar=$("#timeBar")
var displayCost=false
$("#house").hover(()=> {
        displayCost=true
        backToNormal()
        bar.text("house: Wood= 3, Rock= 2, Iron= 3");
        
    }, ()=> {
        displayCost=false
        bar.text("");
    }
);
$("#coop").hover(()=> {
    displayCost=true
    backToNormal()
    bar.text("Coop: Wood= 4, Rock= 3, Iron= 2");
    
}, ()=> {
    displayCost=false
    bar.text("");
}
);
$("#person").hover(()=> {
    displayCost=true
    backToNormal()
    bar.text("Person: Wood= 3, Rock= 3, Iron= 3");
    
}, ()=> {
    displayCost=false
    bar.text("");
}
);
$("#cow").hover(()=> {
    displayCost=true
    backToNormal()
    bar.text("cow: Wood= 2, Rock= 1, Iron= 1");
    
}, ()=> {
    displayCost=false
    bar.text("");
}
);
$("#chicken").hover(()=> {
    displayCost=true
    backToNormal()
    bar.text("chicken: Wood= 1, Rock= 1, Iron= 1");
    
}, ()=> {
    displayCost=false
    bar.text("");
}
);

const backToNormal =()=>{
    bar.css({
        "background-color":"white",
        "width":"100%"
    })
}