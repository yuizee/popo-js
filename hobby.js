$(document).ready(function() {
     // 初始顯示第一個 .bottom 元素
     $('.bottom').first().addClass('active');
            
     // 當點擊 .more-title 或 .more-title-ch 時切換對應的 .bottom 元素
     $('.more-title, .more-title-ch').click(function() {
         // 隱藏所有 .bottom 元素
         $('.bottom').removeClass('active');
         
         // 根據點擊的標題找到對應的 .bottom 元素並顯示
         $(this).next('.bottom').addClass('active');
     });

    // bartxt
    $('#main-nav a').on({
        mouseover: function() {
            $(this).css("color", "#42c5ed");
        },
        mouseout: function() {
            $(this).css("color", "rgb(255, 255, 255)");
        }
    });
    // btn
    $(".btn").hover(
        function() {
            $(this).find("span:nth-child(1)").css({
                //find事件:尋找前面選擇器的子元素
                //這裡是(.btn)->(span:nth-child(1))加上css...
                height: "100%",
                transition: "height 1.5s ease"
                // transition:轉場效果
                // ease:指定一個緩慢開始，然後快速，然後緩慢結束的轉場效果
            });
            $(this).find("span:nth-child(2)").css({
                width: "100%",
                transition: "width 1.5s ease"
            });
            $(this).find("span:nth-child(3)").css({
                height: "100%",
                transition: "height 1.5s ease"
            });
            $(this).find("span:nth-child(4)").css({
                width: "100%",
                transition: "width 1.5s ease"
            });
        },
    function() {
        $(this).find("span:nth-child(1)").css({
            height: "0",
            transition: "height 1.5s ease"
        });
        $(this).find("span:nth-child(2)").css({
            width: "0",
            transition: "width 1.5s ease"
        });
        $(this).find("span:nth-child(3)").css({
            height: "0",
            transition: "height 1.5s ease"
        });
        $(this).find("span:nth-child(4)").css({
            width: "0",
            transition: "width 1.5s ease"
        });
    }
    );
    $('#fs-btn').click(function(){
        $(this).append(': BILLIE EILISH');
    });
    $('#fa-btn').click(function(){
        $(this).append(': 進撃の巨人');
    });
    $('#fb-btn').click(function(){
        $(this).append(': YOASOBI');
    });
    $('#fso-btn').click(function(){
        $(this).append(': 群青');
    });
    $('#fms-btn').click(function(){
        $(this).append(': jpop');
    });
    $('#fama-btn').click(function(){
        $(this).append(': 芙莉蓮');
    });
    $('#fiv-btn').click(function(){
        $(this).append(': 玩遊戲');
    });
    $('#fg-btn').click(function(){
        $(this).append(': SEKIRO');
    });
    $('#fsp-btn').click(function(){
        $(this).append(': 打羽球');
    });
    $('#fsp2-btn').click(function(){
        $(this).append(': 打排球');
    });
    $('#fla-btn').click(function(){
        $(this).append(': 蛤?什麼程式語言...');
    });
    $('#wxl-btn').click(function(){
        $(this).append('普拿疼');
    });
    
});

$('.hamburger-menu').click(function(){
    $('.fullscreen-menu').toggleClass('display_nav');
    $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
    $('.hamburger-menu').toggleClass('move');

});
$('.fullscreen-menu:not(ul)').click(function(){//若全屏選單已經開啟且被點擊任一處，則關閉選單(把選單加上display:none的效果)
    $('.fullscreen-menu').toggleClass('display_nav');
    $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
});

$(document).ready(function() {
    const links = $('.nav-link');
    const pages = $('.page');

    function showPage(hash) {
        pages.each(function() {
            if ('#' + $(this).attr('id') === hash) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    links.on('click', function(event) {
        event.preventDefault();
        const hash = $(this).attr('href');
        window.location.hash = hash;
        showPage(hash);
    });

    // 初始顯示頁面
    const currentHash = window.location.hash || '#home';
    showPage(currentHash);
});

// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('.nav-link');
//     const pages = document.querySelectorAll('.page');

//     function showPage(hash) {
//         pages.forEach(page => {
//             if ('#' + page.id === hash) {
//                 page.classList.add('active');
//             } else {
//                 page.classList.remove('active');
//             }
//         });
//     }

//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const hash = this.getAttribute('href');
//             window.location.hash = hash;
//             showPage(hash);
//         });
//     });

//     // 初始顯示頁面
//     const currentHash = window.location.hash || '#home';
//     showPage(currentHash);
// });