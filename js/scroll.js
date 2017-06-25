$(function(){
    var timer = null;
    var leader=0;
    window.onscroll = function(){
        leader = scroll().top
        console.log(leader)
        // clearInterval(timer)
    }

    // window.scrollTo(x,y)
     clearInterval(timer)
    $(".frame>.right").click(function(){
        console.log(0)
        // window.scrollTo(0,0)
       
        timer = setInterval(function(){
            console.log(1)
            var step = (0-leader)/10
            step = step > 0 ? Math.ceil(step):Math.floor(step)
            leader = leader + step;
            window.scrollTo(0,leader);
            if(leader == 0 ){
                console.log(5)
                clearInterval(timer)
            }
        },30)
    })

// function scroll(){

// }
function scroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}


})