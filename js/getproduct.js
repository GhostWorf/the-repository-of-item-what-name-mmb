$(function(){
    console.log(1)
    var addr = window.location.search.split("=").pop()
    console.log(addr)
    render(addr)
    function render(addr){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
            dataType:"json",
            data:{
                productid:addr
            },
            success:function(data){
                console.log(data);
                var tplStr = template("tpl",data)
                $(".productinfo").html(tplStr)
            },
            error:function(){
                console.log("传输出错")
            }
        })
    }


})