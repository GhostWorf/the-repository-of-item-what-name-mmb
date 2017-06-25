$(function(){
    var addr = window.location.search.split("=").pop();
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrand",
        dataType:"json",
        data:{
           brandtitleid:addr
        },
        success:function(data){
            console.log(data)
            var tplStr = template("tpl",data)
            $(".listwrap").html(tplStr);

            var tid = data.result.brandTitleId
            console.log(tid)

            var liArr = $(".box")
            for(var i =0 ;i<liArr.length;i++){
                liArr.eq(i).find(".level").text(i+1)
                liArr.eq(0).find(".level").addClass("bgcr")
                liArr.eq(1).find(".level").addClass("bgcy")
                liArr.eq(2).find(".level").addClass("bgcg")
              
            }
        },
        error:function(){
            console.log("传输错误")
        }
    })


    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrandproductlist",
        dataType:"json",
        data:{
            brandtitleid:addr,
            pagesize:4
        },
        success:function(data){
            console.log(data)
            var temStr = template("template",data)
            $(".listbody").html(temStr);

            var proid = data.result[0].productId
            var productImg = data.result[0].productImg;
            var productName = data.result[0].productName
            console.log(proid)
            render(proid,productImg,productName)
        },
        error:function(){
            console.log("传输错误")
        }
    })

    function render(productId,productImg,productName){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getproductcom",
            dataType:"json",
            data:{
                productid:productId
            },
            success:function(data){
                console.log(data);
                var commentStr = template("comment",data)
                $(".commentswrap").html(commentStr);

                $(".commentpic").html(productImg);
                $(".brandname").html(productName)
            },
            error:function(){
                console.log("传输错误")
            }
        })
    }
})


