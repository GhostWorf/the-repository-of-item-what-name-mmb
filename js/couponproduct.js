$(function(){
    var addr = window.location.search.split("=").pop();
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcouponproduct",
        dataType:"json",
        data:{
            couponid:addr
        },
        success:function(data){
            console.log(data);
            var lisStr = template("list",data)
            $(".productlist").html(lisStr);


            var picStr = template("pic",data)
            $(".lunbo-wrap").html(picStr)
            // var index = data.result.couponId;
            render();
        },
        error:function(){
            console.log("传输错误");
        }

    })

    function render(){
        // var productlist = document.getElementsByClassName("productlist")[0];
        // var liArr =  productlist.children;
        // var linbo = document.getE
        var lunbo = $(".lunbo");
        var liArr = $(".productlist>li");
        var showliArr=$(".lunpic");
        var prev=$(".left")
        var next=$(".right")
        for(var i=0 ;i<liArr.length;i++){
            // console.log(liArr.length)
            liArr[i].index=i
            liArr[i].onclick=function(){
                console.log(showliArr)
                var index=this.index
                lunbo.css("display","block");
                showliArr.eq(index).show().siblings().hide();
                showliArr.eq(index).click(function(){
                    lunbo.hide();
                })
                showpic(index)
            }
            function showpic(index){
                prev.click(function(){
                    index--;
                    if(index<=0){
                        alert("已经到第一张了")
                        return
                    }
                    showliArr.eq(index).show().siblings().hide(); 
                    showliArr.eq(index).click(function(){
                        lunbo.hide();
                    })
                })
                next.click(function(){
                    index++;
                    if(index>=liArr.length){
                        alert("已经是最后一张了")
                        return
                    }
                    showliArr.eq(index).show().siblings().hide(); 
                    showliArr.eq(index).click(function(){
                        lunbo.hide();
                    })
                })
            }
           

        }
        // liArr.click(function(){
        //     lunbo.show();

        // })
    }
})