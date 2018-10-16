var isPlay=false;
var fullScreenW;
var fullScreenH;
var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
//
;
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth;
            if (docEl.clientWidth > docEl.clientHeight) {
                clientWidth = docEl.clientWidth-64;
                //alert(docEl.clientWidth)//667
                //alert(docEl.clientHeight)//323

            } else {
                clientWidth = docEl.clientHeight;
                //alert(docEl.clientWidth)//375
                //alert(docEl.clientHeight)//603
            }
            if (!clientWidth) return;
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    //doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

Zepto(function ($) {
    //var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
    //横竖屏的实时切换
    function checkDirect() {
        var a,s;
        a = document.documentElement.clientHeight;
        s = document.documentElement.clientWidth;

        var e = function (e, n) {
            var i = s / a, r = 1513 / 750;
            var t = s/1513;//i < r ? a / 750 : s / 1513;
            $(e).css({
                "-webkit-transform-origin": n,
                "transform-origin": n,
                "-webkit-transform": "scale(" + t + ");",
                transform: "scale(" + t + ");"
            });
            console.log('e 横屏');
        };

        var eh = function (e, n) {
            var t =a/1513;//s / 750;
            $(e).css({
                "-webkit-transform-origin": n,
                "transform-origin": n,
                "-webkit-transform": "rotate(90deg) scale(" + t + ")",
                transform: "rotate(90deg) scale(" + t + ");"
            });
            console.log('eh 竖屏');
        };

        var e1 = function (e, n) {
            var i = s / a, r = 1513 / 750;
            var t = i < r ? a / 750 : s / 1513;
            var t=a/750
            var t2=s/1513
            $(e).css({
                "-webkit-transform-origin": n,
                "transform-origin": n,
                "-webkit-transform": "scale(" + t2 + ","+t+");",
                transform: "scale(" + t2 + ","+t+");"
            });
            console.log('e 横屏');
        };

        var eh1 = function (e, n) {
            var t=s/750
            var t2=a/1513
            $(e).css({
                "-webkit-transform-origin": n,
                "transform-origin": n,
                "-webkit-transform": "rotate(90deg) scale(" + t2 + ","+t+");",
                transform: "rotate(90deg) scale(" + t2 + ","+t+");"
            });
            console.log('eh1 竖屏');
        };
        a > s ? eh1(".mod1", "center center") : e1(".mod1", "center center");//height>width
        a > s ? eh(".mod", "center center") : e(".mod", "center center");//height>width
        if(a > s){
            $(".mu1").show();
            $(".mu2").hide();
            $(".mu1").attr("style","z-index:1100;bottom: 20px;right: 20px;transform:rotate(90deg);top: auto;width: 14%;display:block;");
        }else{
            $(".mu2").show();
            $(".mu1").hide();
        }
    }

    //横竖屏的实时切换
    checkDirect();
    //
    var evt = "onorientationchanged" in window ? "orientationchanged" : "resize";
    window.addEventListener(evt, checkDirect, false);

    $(window).on('scroll.elasticity', function (e) {
        e.preventDefault();
    }).on('touchmove.elasticity', function (e) {
            e.preventDefault();
        }
    );
});
