var descContent="";
var shareTitle="神奇动物在我家";

jQuery(document).ready(function() {
	//页面中引入 <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	//<script src="http://special.dajie.com/html/djappshare/dajieWebViewBridge.js"></script>
	//再把当前文件引入 <script type="text/javascript" src="sharewx.js"></script>
	function audioAutoPlay(id,isLoop) {
		var audio = document.getElementById(id);
		audio.play();
		if(!isLoop){
			audio.pause();
		}
		document.addEventListener("WeixinJSBridgeReady", function() {
			audio.play();
			if(!isLoop){
				audio.pause();
			}
		}, false);
	}
	audioAutoPlay('audioFile1',false);
	audioAutoPlay('audioFile2',false);
	audioAutoPlay('audioFile3',false);
	audioAutoPlay('myMusic',true);
})

//页面中引入 <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
//<script src="http://special.dajie.com/html/djappshare/dajieWebViewBridge.js"></script>
//再把当前文件引入 <script type="text/javascript" src="sharewx.js"></script>
var stitles=['啊啊啊！快把我变回来......','我家里......发生了什么？！','糟了，想马上回家看看......','让我回家！现在！立刻！马上！','我一不在家，家里竟然......？','你不在家的时候，竟然有这等大事！','我不在家的时候，原来家里是这样的...']
var r=Math.round(Math.random()*6);
descContent = stitles[r]; // 微信分享标题

// 微信分享图片
var imgUrl = 'http://html5.yztwork.com/vsite/animal/img/share.jpg';

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

function load_wx(config){
	wx.ready(function () {
		wx.onMenuShareAppMessage({
			title: shareTitle,
			desc: descContent,
			link: message_link,
			imgUrl: imgUrl,
			trigger: function (res) {
			},
			success: function (res) {
			},
			cancel: function (res) {
			},
			fail: function (res) {
			}
		});

		wx.onMenuShareTimeline({
			title: descContent,
			link: message_link,
			imgUrl: imgUrl,
			trigger: function (res) {
			},
			success: function (res) {
			},
			cancel: function (res) {
			},
			fail: function (res) {
			}
		});

		wx.onMenuShareQQ({
			title: shareTitle,
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
			title: shareTitle,
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