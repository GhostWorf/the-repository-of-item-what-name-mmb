$(function() {
    var addr = window.location.search.split("=").pop();
    // var urlArr2 = urlArr.splice(1)

    console.log(addr)
        // console.log(urlArr2)
    url(addr);

    function url(pId) {

        // 获取商品种类信息
        $.ajax({
            url: "http://127.0.0.1:9090/api/getcategorybyid",
            dataType: "json",
            data: {
                categoryid: pId
            },
            success: function(data) {
                console.log(data)
                var tplStr = template("tpl", data)
                $(".nav").append(tplStr);

            }
        })


        // 点击翻页 ----------start
        var currentPage = 1;
        var pageCount = 0;
        getpage(1, pId);
        $('.next').click(function() {
            if (currentPage >= pageCount) {
                return false;
            }

            currentPage++;
            $("#sel").val(currentPage)
            getpage(currentPage, pId)
        });

        $('.prev').click(function() {
            if (currentPage <= 1) {
                return false;
            }
            currentPage--;
            $("#sel").val(currentPage)
                // $("#sel").val(currentPage);
            getpage(currentPage, pId)
        });


        // 点击翻页 ---------end

        // 直接选择跳页
        $("#sel").on("change", function() {
            // var attr = $(this).val();
            currentPage = $(this).val()
            getpage(currentPage, pId)
        })


        function creatOption(pageNum, pageId) {
            var str = "";
            for (var i = 0; i < pageNum; i++) {
                if ((i + 1) == pageId) {
                    str += '<option selected value="' + (i + 1) + '">' + (i + 1) + '/' + pageNum + '</option>';
                } else {
                    str += '<option  value="' + (i + 1) + '">' + (i + 1) + '/' + pageNum + '</option>';
                }
            }
            $('select').html(str);

        }
        // getpage(currentPage,pId)



        // 获取同种类商品
        function getpage(currentPage, cId) {
            $.ajax({
                url: "http://127.0.0.1:9090/api/getproductlist",
                dataType: "json",
                data: {
                    categoryid: cId,
                    pageid: currentPage
                },
                success: function(data) {
                    console.log(data);
                    var tStr = template("template", data)
                    $(".listbody").html(tStr)

                    pageCount = Math.ceil(data.totalCount / data.pagesize)
                    creatOption(pageCount, currentPage);
                    // $('#productRap').html(html)
                },
                error: function() {
                    console.log('传输错误')
                }
            });
        }
    }
});




//监听select标签的改变
// $('select').change(function(){
//     consolel.log(48);
// });





//     //请求商品列表数据


//     render(1);

//     //注册上一页点击事件
//     var pageNum = 0;
//     var pageId = 1;
//     $('.prev').click(function(){
//         pageId--;
//         if(pageId < 1){
//             pageId = 1;
//             alert('已经是第一页了!')
//             return;
//         }
//         render(pageId);
//         // $('option').attr()
//     });
//     $('.next').click(function(){
//         console.log(pageNum);
//         pageId++;

//         if(pageId > pageNum){
//             pageId = pageNum;
//             alert('已经是最后一页了!')
//             return;
//         }

//         render(pageId);
//     });



//     //封装ajax请求数据
//     function render(pageId){
//         $.ajax({
//             url:'http://127.0.0.1:9090/api/getproductlist',
//             data:{
//                 categoryid:arr[1],
//                 pageid:pageId
//             },
//             dataType:'json',
//             success:function(data){
//                 console.log(data);
//                 pageNum = Math.ceil(data.totalCount/data.pagesize);
//                 var html = template('productlisRap',data);
//                 $('#productRap').html(html);

//                     creatOption(pageNum,pageId);
//                     // console.log(1);
//             }
//         });
//     }

//     //封生成option标签的函数
//     function creatOption(pageNum,pageId){
//         var str = "";
//         for(var i = 0; i < pageNum; i++){
//             if((i+1) == pageId){
//                 str += '<option selected value="'+(i+1)+'">'+(i+1)+'/'+pageNum+'</option>';
//             }else{
//               str += '<option  value="'+(i+1)+'">'+(i+1)+'/'+pageNum+'</option>';  
//             }
//         }
//         $('select').html(str);

//     }


// });