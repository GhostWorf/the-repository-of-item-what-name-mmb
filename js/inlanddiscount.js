$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getinlanddiscount",
        dataType:"json",
        success:function(data){
            console.log(data)
            var tplStr = template("tpl",data);
            $(".content").html(tplStr);
        },
        error:function(){
            console.log("传输错误")
        }
    })
})