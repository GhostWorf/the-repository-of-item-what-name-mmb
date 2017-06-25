$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcoupon",
        dataType:"json",
        success:function(data){
            console.log(data)
            var tplStr = template("list",data)
            $(".wrap").html(tplStr)
        },
        error:function(){
            console.log("传输错误");
            
        }
    })
})