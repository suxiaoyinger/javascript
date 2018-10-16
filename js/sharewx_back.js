var title=["严肃！留神你爸的这些行为！","看完你会想去翻翻你爸朋友圈..."];//没做题转发给朋友标题文案
var r=Math.round(Math.random()*1+1)
var descContent = "拯救老爸成功案例"; // 没做题转发给朋友注释文案
var shareTitle = title[r-1];//title[r]; // 没做题转发给朋友标题文案
var shareTitle1=title[r-1]
var imgUrl = 'http://html5.yztwork.com/vsite/baidu_v/img/share.png';

jQuery(document).ready(function() {
    //页面中引入 <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    //<script src="http://special.dajie.com/html/djappshare/dajieWebViewBridge.js"></script>
    //再把当前文件引入 <script type="text/javascript" src="sharewx.js"></script>
    function audioAutoPlay(id) {
        var audio = document.getElementById(id);
        audio.play();
        audio.pause();
        document.addEventListener("WeixinJSBridgeReady", function() {
            //alert(1)
            audio.play();
            audio.pause();
        }, false);
    }
    audioAutoPlay('audioFile');
})
	
/*
if (imgUrl.indexOf(window.location.protocol) < 0){
    if (imgUrl[0]=='.'){
        imgUrl =  '/' + imgUrl;
    }
    imgUrl = window.location.protocol + '//' + window.location.host + imgUrl;
}*/

var localUrl = window.location.origin + window.location.pathname;
var localSearch = window.location.search;

// 微信分享网址
var message_link = localUrl + localSearch;

function load_wx_config(callback){
    var url = encodeURIComponent(window.location.href);
    $.ajax({
		type: "POST",
        url: "http://html5.yztwork.com/user/weixin/share",
		data: {url:message_link},
        success: function (result) {
            if (result.errorCode == 0) {

				var co=result.resultObject;
				co.jsApiList=["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems",
					"showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd",
					"playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage",
					"getNetworkType","openLocation","getLocation","hideOptionMenu",
					"showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"];
				co.jsApiList=[
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'openLocation',
					'getLocation'
				];
				co.appId="wxab80773c270b0ec7";//wx5e2ca31d812b3e92
				co.debug= false;
				var opt={};
				opt.jsApiList=co.jsApiList;
				opt.nonceStr=co.nonceStr;
				opt.debug=co.debug;
				opt.appId=co.appId;
				opt.signature=co.signature;
				opt.timestamp=co.timestamp;


				wx.config(jQuery.extend(opt, {
					debug: false
				}));
				callback && callback(result.data);
            }
        }
    });
}
$.getUrlParam = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}
//
//isGoLast=false;
//function goLast(){
//    if(linkOpenId==openId||linkOpenId==""||linkOpenId==null){
//        if(isGoLast){
//            _hmt.push(['_trackEvent', "f"+from_my, "share", "第一个人测试完分享"]);
//        }else{
//            _hmt.push(['_trackEvent',  "f"+from_my, "share", "第一个人只打开首页分享"]);
//        }
//    }else{
//        _hmt.push(['_trackEvent',  "f"+from_my, "share", "两个人匹配之后的结果分享"]);
//    }
//    if(isGoLast){
//        //去最后一页
//        isGoLast=false;
//        $(".share_tc").hide();
//        $(".shareResult").show();
//        if(!isMy){
//            getFriendList(linkOpenId)
//        }
//        else{
//            getFriendList(openId)
//        }
//        curScene.sceneList[1].visible=false;
//        curScene.sceneList[1].canTouch=false;
//
//    }else{
//
//    }
//
//}
function load_wx(config){
    wx.ready(function () {
        wx.onMenuShareAppMessage({
            title: shareTitle1,
            desc: descContent,
            link: message_link,
            imgUrl: imgUrl,
            trigger: function (res) {
            },
            success: function (res) {
                //goLast();
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });

        wx.onMenuShareTimeline({
            title: shareTitle1,
            link: message_link,
            imgUrl: imgUrl,
            trigger: function (res) {
            },
            success: function (res) {
                //goLast();
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });

        wx.onMenuShareQQ({
            title: shareTitle1,
            desc: descContent,
            link: message_link,
            imgUrl: imgUrl,
            trigger: function (res) {
            },
            complete: function (res) {
            },
            success: function (res) {
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });

        wx.onMenuShareWeibo({
            title: shareTitle1,
            desc: descContent,
            link: message_link,
            imgUrl: imgUrl,
            trigger: function (res) {
            },
            complete: function (res) {
            },
            success: function (res) {
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });
    });
}

load_wx_config(function(){
    load_wx();
});