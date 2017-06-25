$(function() {
    var shopid = 0;
    var aid = 0;
    $.ajax({
        url: "http://127.0.0.1:9090/api/getgsshop",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var tplStr = template("tpl", data)
            $(".storewrap").html(tplStr);
            $(".store").click(function() {
                $(this).next(".storewrap").slideToggle()
            })

            callclick()
        }
    })

    function callclick() {

        $(".storelist").on("click", function() {
            var text = $(this).text().trim()
            $(this).parent(".storewrap").slideUp()
            $(this).parent(".storewrap").prev(".store").children("a").children("span").html(text);
            shopid = $(this).attr("sid")
            getgs(shopid)
                // renderc(shopid)
        })

    }

    $.ajax({
        url: "http://127.0.0.1:9090/api/getgsshoparea",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var tplStr = template("tpls", data)
            $(".areawrap").html(tplStr);
            $(".area").click(function() {
                $(this).next(".areawrap").slideToggle()
            })
            renderc()
        },
        error: function() {
            console.log("传输错误")
        }
    })

    function renderc() {
        // sid = shopid || 0;
        // console.log(sid)
        $(".arealist").click(function() {
            // event.stopPropagation()


            // console.log(aid)
            shopid = shopid
            console.log(shopid)
            areaid = $(this).attr("aid")
            console.log(areaid);
            getgs(shopid, areaid)
            var text = $(this).text().trim().split("（").shift();
            $(this).parent(".areawrap").slideUp()
            $(this).parent(".areawrap").prev(".area").children("a").children("span").html(text);
        });
        // console.log(sid) 
    }


    getgs(shopid, aid)

    function getgs(shopid, areaid) {
        shopid = shopid || 0;
        areaid = areaid || 0;
        $.ajax({
            url: "http://127.0.0.1:9090/api/getgsproduct",
            dataType: "json",
            data: {
                shopid: shopid,
                areaid: areaid
            },
            success: function(data) {
                console.log(data);
                var tplgsStr = template("tplgs", data)
                $(".getgswrap").html(tplgsStr)
                    // alert(1)      
            },
            error: function() {
                console.log("传输错误")
            }
        })
    }



})