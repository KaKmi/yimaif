$('.ui-searchbar').click(function () {
    $('#search_page').css('display','block');
    $('#mainPage').css('display','none');
    $('#search_page .ui-searchbar-wrap').addClass('focus');
    $('#search_page .ui-searchbar-input input').focus();
});
$('.ui-searchbar-cancel').click(function(){
    $('.ui-searchbar-wrap').removeClass('focus');
    $('#search_page').css('display','none');
    $('#mainPage').css('display','block');
});

$('.ui-icon-close').click(function () {
    $('#search_page .ui-searchbar-input input').val('');
});

var tips;
$('.ui-tab-nav').delegate('li','click', function () {
    if($(this).attr('id')=='user_search'){
        $(this).addClass('current');
    }else{
        tips=$.tips({
            content:'敬启期待',
            stayTime:2000,
            type:"info"
        });
        tips.on("tips:hide",function(){
            console.log("tips hide");
        })
    }
});


var e = $(".houseFeed").find("canvas").length;
e > 0 && $(".houseFeed").find("canvas").each(function() {
        var e = $(this).data("src")
            , t = new Image;
        t.canvs = $(this)[0];
        var n = t.canvs.getContext("2d");
        n && (t.onload = function() {
            t.canvs.width = this.width;
                t.canvs.height = this.height;
                n.drawImage(this, 0, 0);
                $(t.canvs).css("background-image", "none");
        }, t.src = e)
    }
)

