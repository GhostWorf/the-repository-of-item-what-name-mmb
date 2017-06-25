$(function(){
    var addr = window.location.search.split("=").pop(); 
    $.ajax({
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        dataType:"json",
        data:{
            productid:addr
        },
        success:function(data){
            console.log(data)
            var tplStr = template("tpl",data)
            $(".productinfo").html(tplStr);
        },
        error:function(){
            console.log("传输错误")
        }
    })
})