$(function(){
    // var wrapper = document.getElementById('wrapper');
    // var myScroll = new IScroll(wrapper);

    var myScroll;
    function loaded() {
        myScroll = new IScroll('#wrapper',{ 
            scrollX: true,   // 横向
            scrollY: false   // 纵向
        });
    }

    $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
        dataType:"json",
        success:function(data){
            console.log(data)
            var tplStr = template("tpl",data)
            // console.log(tplStr)
            $(".box").html(tplStr);

            var tid = 0
            // console.log(titleid);
            getlist(tid);

            (function(){
                console.log(1)
                
                // console.log(1)
                var width = 0;
                $('.ti').each(function( index, item ) {
                    // console.log(1)
                    // width()方法用于获得元素宽度；
                    // innerWidth()方法用于获得包括内边界（padding）的元素宽度
                    // outerWidth()方法用于获得包括内边界(padding)和边框(border)的元素宽度
                    width += $( item ).innerWidth();
                    // console.log(1) 
                    // console.log(width)
                });
                // 加上右侧搜索框的宽度
                width += $('.nav-searchbtn').innerWidth();
                console.log(width)
                // 最后设置给ul
                $('.box').width(width);
                // console.log(1)
                // 初始化完ul宽度后，进行wapper初始化
                loaded();
                $(".ti>a").on("click",function(){
                    
                    $(this).addClass("color").parent().siblings().children().removeClass("color")
                })
                $(".navtitle").click(function(){
                    var tid = $(this).attr("tid")
                    getlist(tid)
                })
            })()
        },
        error:function(){
            console.log("传输错误")
        }

    })  

    function getlist(tid){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
            dataType:"json",
            data:{
                titleid:tid
            },
            success:function(data){
                console.log(data)
                var lisStr = template("list",data);
                $(".productlist").html(lisStr);
            },
            error:function(){
                console.log("传输错误")
            }
        })
    }


    



        
 
})