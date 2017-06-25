$(function(){
    var addr = window.location.search.split("=").pop();
    console.log(addr);

    $.ajax({
        url:"http://127.0.0.1:9090/api/getproduct",
        dataType:"json",
        data:{
            productid:addr,
        },
        success:function(data){
            // console.log(data)

            var name = data.result[0].productName.split(" ").shift();
            var cgy = data.result[0].categoryId;
            // console.log(cgy)
            $(".pro_name").html(name)

            var tplStr = template("tpl",data)
            $(".product").html(tplStr)
            render(cgy) 
        },
        error:function(){
            console.log("传输错误")
        }
    })
    function render(cgy){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getcategorybyid",
            dataType:"json",
            data:{
                categoryid:cgy
            },
            success:function(data){
                // console.log(data)
                var tplStr = template("tpl2",data)
                $(".position").append(tplStr);
            },
            error:function(){
                console.log("传输错误")
            }
        })
    }

    $.ajax({
        url:"http://127.0.0.1:9090/api/getproductcom",
        dataType:"jsonp",
        data:{
            productid:addr
        },
        success:function(data){
            console.log(data)
            var tplStr = template("tplc",data);
            $(".content").append(tplStr);
        },
        error:function(){
            console.log("传输错误")
           
        }
    })
})