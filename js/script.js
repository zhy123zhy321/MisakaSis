(function($){
    var toTop = ($('#sidebar').height() - $(window).height()) + 60;
    // Caption
    $('.article-entry').each(function(i){
        $(this).find('img').each(function(){
            if ($(this).parent().hasClass('fancybox')) {
                return;
            }
            var alt = this.alt;
            if (alt) {
                $(this).after('<span class="caption">' + alt + '</span>');
            }

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });

        $(this).find('.fancybox').each(function(){
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox){
        $('.fancybox').fancybox();
    }

    // Profile card
    $(document).on('click', function () {
        $('#profile').removeClass('card');
    }).on('click', '#profile-anchor', function (e) {
        e.stopPropagation();
        $('#profile').toggleClass('card');
    }).on('click', '.profile-inner', function (e) {
        e.stopPropagation();
    });

    // To Top
    if ($('#sidebar').length) {
        $(document).on('scroll', function () {
            if ($(document).width() >= 800) {
                if(($(this).scrollTop() > toTop) && ($(this).scrollTop() > 0)) {
                    $('#toTop').fadeIn();
                    $('#toTop').css('left', $('#sidebar').offset().left);
                } else {
                    $('#toTop').fadeOut();
                }
            } else {
                $('#toTop').fadeIn();
                $('#toTop').css('right', 20);
            }
        }).on('click', '#toTop', function () {
            $('body, html').animate({ scrollTop: 0 }, 600);
        });
    }

}
)(jQuery);

function NewDate(str) { 
	str = str.split('-'); 
	var date = new Date(); 
	date.setUTCFullYear(str[0], str[1] - 1, str[2]); 
	date.setUTCHours(0, 0, 0, 0); 
	return date; 
} 
var zhucexinxi = document.getElementById("footer-info").innerHTML;
function showsectime() {
	var birthDay =NewDate("2019-03-16");
	var today=new Date();
	var timeold=today.getTime()-birthDay.getTime();
	
	var sectimeold=timeold/1000
	var secondsold=Math.floor(sectimeold);
	var msPerDay=24*60*60*1000;

	var e_daysold=timeold/msPerDay;
	var daysold=Math.floor(e_daysold);
	var e_hrsold=(daysold-e_daysold)*-24;
	var hrsold=Math.floor(e_hrsold);
	var e_minsold=(hrsold-e_hrsold)*-60;
	var minsold=Math.floor((hrsold-e_hrsold)*-60);
	var seconds=Math.floor((minsold-e_minsold)*-60).toString();
	document.getElementById("footer-info").innerHTML = zhucexinxi+"<br>"+"本站已艰难运行"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
	setTimeout(showsectime, 1000);
}

showsectime();