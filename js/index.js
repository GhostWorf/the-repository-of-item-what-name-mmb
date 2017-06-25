$(function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getindexmenu",
        success:function(data){
                /*渲染多数据*/
            console.log(data)
            // for(var i = 0; i<12;i++){
                // console.log(data.name)
                var tplStr  = template('tpl',data);
                // console.log(tplStr);
                $('.items').append(tplStr);
                $(".items li").eq(7).click(function(){
                    console.log(1)
                    $(this).children().eq(0).attr('href','javascript:;');
                     console.log($(this).children().eq(0))
                    $(this).nextAll("li").slideToggle();
                }).nextAll("li").hide();
                
            // }
        },
        error:function(){
            console.log("传输错误")
        }
    });
    
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        success:function(data){
            console.log(data)
             var tplStr  = template('template',data);
                // console.log(tplStr);
                $('.list').append(tplStr);
        },
        error:function(){
            console.log("传输错误")
        }
    })
    // $(".moreinfo>a").click({
    //     window.location.href=""; 
    // })
    
})