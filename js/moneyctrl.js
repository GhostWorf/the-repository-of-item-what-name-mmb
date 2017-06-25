$(function(){

    var currentPage = 0
    var pagesCount = 0
    render(currentPage)

    // setInterval(function(){
    //     render(currentPage)
    // },1000)
        $('.next').click(function(){
            if(currentPage >= pagesCount){
                return false;
            }
            
            currentPage++;
            $("#sel").val(currentPage)
            render(currentPage)
        });
        $('.prev').click(function(){
            if(currentPage <= 1){
                return false;
            }
            currentPage--;
            $("#sel").val(currentPage)
        
            render(currentPage)
        });
        console.log(currentPage);
        
        $("#sel").on("change",function(){
            currentPage = $(this).val()
            console.log(currentPage)
            render(currentPage)
        })
        function creatOption(pageNum,pageId){
            var str = "";
            for(var i = 0; i < pageNum; i++){
                if((i+1) == pageId){
                    str += '<option selected value="'+(i+1)+'">'+(i+1)+'/'+pageNum+'</option>';
                }else{
                str += '<option  value="'+(i+1)+'">'+(i+1)+'/'+pageNum+'</option>';  
                }
            }
            $('select').html(str);
        }
     

    
    function render(pageCount){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getmoneyctrl",
            dataType:"json",
            data:{
                pageid:currentPage
            },
            success:function(data){
                console.log(data)
                var tplStr  = template('template',data);
                $('.list').html(tplStr);
                pagesCount = Math.ceil(data.totalCount/data.pagesize)
                creatOption(pagesCount,currentPage)
            },
            error:function(){
                console.log("传输错误")
            }
        })
    }
})
    







    