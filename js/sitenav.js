$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getsitenav",
        dataType:"json",
        success:function(data){
            console.log(data); 
            var tplStr = template("tpl",data)
            $(".navwrap").html(tplStr)
        },
        error:function(){
            console.log("传输错误")
        }
    })
})