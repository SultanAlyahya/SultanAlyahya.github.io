const witchToCreate=(a,s)=>{
    $('.available').toggleClass('backToWork')
    if(canCreate && toCreate == "house"){
       if(wood >= 3 && rock >=2 && iron >= 3){
            var addElementTo = `<img id="house_a${a}s${s}" class="house" src="https://i.ya-webdesign.com/images/shack-vector-straw-house-4.png">`
            $("main").append(addElementTo)//http://pluspng.com/img-png/free-png-log-cabin-woods-log-cabin-house-home-wooden-residential-building-746.png
            $(`#house_a${a}s${s}`).css({
                "grid-column-start": a,
                "grid-column-end": a+2,
                "grid-row-start": s+1,
                "grid-row-end": s+3,
                "display":"block",
                "width":"100%",
                "height":"auto",
                "Opacity":"0",
            })//https://i.ya-webdesign.com/images/farm-cartoon-png-5.png
            $(`#house_a${a}s${s}`).fadeTo(5000, 1);
            setTimeBar(50)
            availableArea[a][s]=false
            availableArea[a-1][s]=false
            availableArea[a][s+1]=false
            availableArea[a-1][s+1]=false
            checkIfAvailable(a,s)
            itemsAfterBuild(3,2,3)
            }
        }
    
    else if(canCreate && toCreate == "coop"){
        if(wood >=4  && rock >= 3  && iron >= 2){
            var addElementTo = `<img id="house_a${a}s${s}" class="house" src="https://i.ya-webdesign.com/images/farm-cartoon-png-5.png">`
            $("main").append(addElementTo)
            $(`#house_a${a}s${s}`).css({
                "grid-column-start": a,
                "grid-column-end": a+2,
                "grid-row-start": s+1,
                "grid-row-end": s+3,
                "display":"block",
                "width":"100%",
                "height":"auto",
                "Opacity":"0",
            })
            $(`#house_a${a}s${s}`).fadeTo(5000, 1);
            setTimeBar(50)
            availableArea[a][s]=false
            availableArea[a-1][s]=false
            availableArea[a][s+1]=false
            availableArea[a-1][s+1]=false
            checkIfAvailable(a,s)
            itemsAfterBuild(4,3,2)
        }
    }
    else if(canCreate && toCreate == "person"){
        if(wood >= 3  && rock >= 3  && iron >= 3){
            var addElementTo = `<img id="house_a${a}s${s}" class="house" src="https://cdn.pixabay.com/photo/2019/07/25/04/08/peasant-drawing-4361592__340.png">`
            $("main").append(addElementTo)
            $(`#house_a${a}s${s}`).css({
                "grid-column-start": a+1,
                "grid-column-end": a+2,
                "grid-row-start": s+1,
                "grid-row-end": s+2,
                "display":"block",
                "width":"auto",
                "height":"100%",
            })//https://huntpng.com/images250/cartoon-wood-png-2.png
            availableArea[a][s]=false
            checkIfAvailable(a,s)
            itemsAfterBuild(3,3,3)
        }
    }
    else if(canCreate && toCreate == "cow"){
        if(wood >= 2  && rock >= 1 && iron >= 1){
            var addElementTo = `<img id="house_a${a}s${s}" class="house" src="https://theferkel.files.wordpress.com/2014/06/cow9.png">`
            $("main").append(addElementTo)
            $(`#house_a${a}s${s}`).css({
                "grid-column-start": a,
                "grid-column-end": a+2,
                "grid-row-start": s+1,
                "grid-row-end": s+2,
                "display":"block",
                "width":"auto",
                "height":"75%",
            })
            availableArea[a][s]=false
            availableArea[a-1][s]=false
            checkIfAvailable(a,s)
            itemsAfterBuild(2,1,1)
        }   
    }
    else if(canCreate && toCreate == "chicken"){
        if(wood >= 1  && rock >= 1 && iron >= 1){
        var addElementTo = `<img id="house_a${a}s${s}" class="house" src="./images/FAVPNG_chicken-buffalo-wing-cartoon-clip-art_N83sMKEJ.png">`
        $("main").append(addElementTo)
        $(`#house_a${a}s${s}`).css({
            "grid-column-start": a+1,
            "grid-column-end": a+2,
            "grid-row-start": s+1,
            "grid-row-end": s+2,
            "display":"block",
            "width":"100%",
            "height":"auto",
        })
        availableArea[a][s]=false
        checkIfAvailable(a,s)
            itemsAfterBuild(1,1,1)
    }    
   }

}
   const itemsAfterBuild =(w,r,i)=>{
       wood=wood-w
       rock=rock-r
       iron=iron-i
       $("#wood").text("Wood= "+wood);
       $("#rock").text("rock= "+rock);
       $("#Iron").text("Iron= "+iron);
   }
   