$(function() {

    // 商品种类信息请求
    $.ajax({

        url: "http:/127.0.0.1:9090/api/getcategorytitle",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var tplStr = template("tplproduct", data);
            $(".productlist").append(tplStr);
            $(".productlist>ul").hide().prev("li").click(function() {
                $(this).next("ul").slideToggle();
                // $(this).parent().find("i").
            });

            $(".productlist>li").each(function() {
                var titleId = $(this).data("id");
                render(titleId)
            });
            // 

        },
        error: function() {
            console.log("请求出错")
        }
    })


    // 商品种类下商品列表请求
    function render(titleId) {
        $.ajax({
            // type:"get",
            url: "http://127.0.0.1:9090/api/getcategory",
            dataType: "json",
            data: {
                titleid: titleId
            },
            success: function(data) {
                console.log(data);
                var tplStr = template("tplnav", data)
                $(".productlist>.productnav:eq(" + titleId + ")").append(tplStr);
            },
            error: function() {
                console.log("传输错误")
            }
        })
    }



})