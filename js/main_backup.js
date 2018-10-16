var time1,time2,time3;
var time11,time22,time33,time111;
var loadt1,loadt2,loadt3;
var userPlay=true;
$(function(){
    var width=document.documentElement.clientWidth==0?document.body.clientWidth:document.documentElement.clientWidth
    var height=document.documentElement.clientHeight==0?document.body.clientHeight:document.documentElement.clientHeight
    if(width/height>=360/519){
        $(".mod1 .jump").css("right","12%")
    }

    l=$(".xu1").length;
    t=0;
    time111=setInterval(function(){
        if(t<l-1){
            t+=1;
        }
        else{
            t=0
        }
        $(".xu1").hide()
        $(".xu1").eq(t).show()

        $(".xu2").hide()
        $(".xu2").eq(t).show()

        $(".xu3").hide()
        $(".xu3").eq(t).show()
    },150)

    l1=$(".meng1").length;
    t1=0;
    time11=setInterval(function(){
        if(t1<l1-1){
            t1+=1;
        }
        else{
            t1=0
        }
        $(".meng1").hide()
        $(".meng1").eq(t).show()
    },150)

    l2=$(".meng2").length;
    t2=0;
    time22=setInterval(function(){
        if(t2<l2-1){
            t2+=1;
        }
        else{
            t2=0
        }
        $(".meng2").hide()
        $(".meng2").eq(t).show()
    },150)

    var loadp1=true;
    var loadp2=true;
    var loadp3=false


    window.addEventListener('resize', function(){
        fullScreenW=document.documentElement.clientWidth==0?document.body.clientWidth:document.documentElement.clientWidth;
        fullScreenH=document.documentElement.clientHeight==0?document.body.clientHeight:document.documentElement.clientHeight;
        if(fullScreenW>=fullScreenH && isAndroid){
            $(".tip").show()
        }
        else if(fullScreenW<fullScreenH && isAndroid){
            $(".tip").hide()
        }
    }, false);

    var imgs = $('.isimg').find('img'),
        imgLength = imgs.length,
        imgIndex = 0;
    function preLoad($img){
        var _src = $img.attr("_src");
        $img.attr("src",_src);
        $img.get(0).onload = function(){
            imgIndex++;
            if(imgIndex < imgLength){
                var per = Math.ceil((imgIndex)/(imgLength)*100);
                $(".loadNum").html(per+"%");
                //$(".loadbar").css({left:per+"%"})
                if(per<=35){
                    $(".loadbar").css({left:"0%"})
                }
                else{
                    $(".loadbar").css({left:(per-35)+"%"})
                }
                $("#load_p").css({width:per+"%"})
                if(per<=40 && loadp1){
                    var l=$(".loadpic1 img").length;
                    var t=0;
                    loadt1=setInterval(function(){
                        if(t<l-1){
                            t+=1;
                        }
                        else{
                            t=0
                        }
                        $(".loadpic1 img").hide()
                        $(".loadpic1 img").eq(t).show()
                    },150)

                    loadp1=false;
                    loadp2=true;
                    $(".loadpic").hide()
                    $(".loadpic1").show()
                }
                else if(per>40 && per<=80 && loadp2){
                    clearInterval(loadt1)
                    var l=$(".loadpic2 img").length;
                    var t=0;
                    loadt2=setInterval(function(){
                        if(t<l-1){
                            t+=1;
                        }
                        else{
                            t=0
                        }
                        $(".loadpic2 img").hide()
                        $(".loadpic2 img").eq(t).show()
                    },150)

                    loadp2=false;
                    loadp3=true;
                    $(".loadpic").hide()
                    $(".loadpic2").show()
                }
                else if(per>80 && per<100 && loadp3){
                    clearInterval(loadt2)
                    var l=$(".loadpic3 img").length;
                    var t=0;
                    loadt3=setInterval(function(){
                        if(t<l-1){
                            t+=1;
                        }
                        else{
                            t=0
                        }
                        $(".loadpic3 img").hide()
                        $(".loadpic3 img").eq(t).show()
                    },150)

                    loadp3=false;
                    $(".loadpic").hide()
                    $(".loadpic3").show()
                }
                preLoad(imgs.eq(imgIndex));
                $(".loadBar").animate({width:per+"%"},100);
            }else{
                clearInterval(loadt3)
                $("#loader").hide();
                $(".page1").show();
                $(".page1").addClass("active")
                $(".mu1").css("z-index",119)
                $(".mu2").css("z-index",119)
            }
        };
        $img.get(0).onerror =function(){
            imgIndex++;
            if(imgIndex < imgLength){
                var per = Math.ceil((imgIndex)/(imgLength)*100);
                $(".loadNum").html(per+"%");
                //$(".loadbar").css({left:per+"%"})
                if(per<=35){
                    $(".loadbar").css({left:"0%"})
                }
                else{
                    $(".loadbar").css({left:(per-35)+"%"})
                }
                $("#load_p").css({width:per+"%"})
                if(per<=40 && loadp1){
                    var l=$(".loadpic1 img").length;
                    var t=0;
                    loadt1=setInterval(function(){
                        if(t<l-1){
                            t+=1;
                        }
                        else{
                            t=0
                        }
                        $(".loadpic1 img").hide()
                        $(".loadpic1 img").eq(t).show()
                    },150)

                    loadp1=false;
                    loadp2=true;
                    $(".loadpic").hide()
                    $(".loadpic1").show()
                }
                else if(per>40 && per<=80 && loadp2){
                    clearInterval(loadt1)
                    var l=$(".loadpic2 img").length;
                    var t=0;
                    loadt2=setInterval(function(){
                        if(t<l-1){
                            t+=1;
                        }
                        else{
                            t=0
                        }
                        $(".loadpic2 img").hide()
                        $(".loadpic2 img").eq(t).show()
                    },150)

                    loadp2=false;
                    loadp3=true;
                    $(".loadpic").hide()
                    $(".loadpic2").show()
                }
                else if(per>80 && per<100 && loadp3){

                    clearInterval(loadt2)
                    var l=$(".loadpic3 img").length;
                    var t=0;
                    loadt3=setInterval(function(){
                        if(t<l-1){
                            t+=1;
                        }
                        else{
                            t=0
                        }
                        $(".loadpic3 img").hide()
                        $(".loadpic3 img").eq(t).show()
                    },150)

                    loadp3=false;
                    $(".loadpic").hide()
                    $(".loadpic3").show()
                }
                preLoad(imgs.eq(imgIndex));
                $(".loadBar").animate({width:per+"%"},100);
            }else{
                clearInterval(loadt3)
                $("#loader").hide();
                $(".page1").show();
                $(".page1").addClass("active")
                $(".mu1").css("z-index",119)
                $(".mu2").css("z-index",119)
            }
        }
    }

    var statTime=new Date();
    var imgs1 = $('#loader').find('img'),
        imgLength1 = imgs1.length,
        imgIndex1 = 0;
    function preLoadLoad($img){
        var _src = $img.attr("_src");
        $img.attr("src",_src);
        $img.get(0).onload = function(){
            imgIndex1++;
            if(imgIndex1 < imgLength1){
                preLoadLoad(imgs1.eq(imgIndex1));
            }else{
                var endTime=new Date()
                var t=0
                if(endTime-statTime<=2000){
                    t=2000-t
                }
                setTimeout(function(){
                    $(".tip").hide()
                    $("#loader").show()
                    $("#load_p img").css({width:$("#load_p img").width()});
                    $("#load_p").css({width:"0%","opacity":"1"})
                    preLoad(imgs.eq(imgIndex))
                },t)
            }
        };
        $img.get(0).onerror =function(){
            imgIndex1++;
            if(imgIndex1 < imgLength1){
                var per = Math.ceil((imgIndex1)/(imgLength1)*100);
                preLoadLoad(imgs1.eq(imgIndex1));
            }else{
                var endTime=new Date()
                var t=0
                if(endTime-statTime<=2000){
                    t=2000-t
                }
                setTimeout(function(){
                    $(".tip").hide()
                    $("#loader").show()
                    $("#load_p img").css({width:$("#load_p img").width()});
                    $("#load_p").css({width:"0%","opacity":"1"})
                    preLoad(imgs.eq(imgIndex))
                },t)
            }
        }
    }
    preLoadLoad(imgs1.eq(imgIndex1));


    $(".tvl").click(function(){
        clearInterval(time11)
        $(".meng1").hide()
        $(".page1").hide()
        $(".videoDiv").eq(2).show()
        $("#audioFile3")[0].play()
        $(".page23").show()
        time3=setInterval(function(){
            if($("#audioFile3")[0].currentTime>=6.6){
                clearInterval(time3)
                $("#audioFile3")[0].pause()
                $(".page23").addClass("active")
                setTimeout(function(){
                    $(".du").addClass("active")
                },1500)
            }
        },50)
        if(userPlay){
            playMusic(false,false)
        }
        $(".jump").css("z-index","140")
        var evt = "onorientationchanged" in window ? "orientationchanged" : "resize";
        window.removeEventListener(evt, checkDirectJ);
        window.addEventListener(evt, checkDirectJ);
        checkDirectJ()
    })

    $(".tvr").click(function(){
        clearInterval(time22)
        $(".meng2").hide()
        $(".page1").hide()
        $(".videoDiv").eq(1).show()
        $("#audioFile2")[0].play()
        $(".page22").show()
        time2=setInterval(function(){
            if($("#audioFile2")[0].currentTime>=11){
                clearInterval(time2)
                $("#audioFile2")[0].pause()
                $(".page22").addClass("active")

                setTimeout(function(){
                    $(".du").addClass("active")
                },1500)
            }
        },50)
        if(userPlay){
            playMusic(false,false)
        }
        $(".jump").css("z-index","140")
        var evt = "onorientationchanged" in window ? "orientationchanged" : "resize";
        window.removeEventListener(evt, checkDirectJ);
        window.addEventListener(evt, checkDirectJ);
        checkDirectJ()
    })

    $(".tvm").click(function(){
        clearInterval(time33)
        $(".meng3").hide()
        $(".page1").hide()
        $(".videoDiv").eq(0).show()
        $("#audioFile1")[0].play()
        $(".page21").show()
        time1=setInterval(function(){
            if($("#audioFile1")[0].currentTime>=7.8){
                clearInterval(time1)
                $("#audioFile1")[0].pause()
                $(".page21").addClass("active")

                setTimeout(function(){
                    $(".du").addClass("active")
                },1500)
            }
        },50)
        if(userPlay){
            playMusic(false,false)
        }
        $(".jump").css("z-index","140")
        var evt = "onorientationchanged" in window ? "orientationchanged" : "resize";
        window.removeEventListener(evt, checkDirectJ);
        window.addEventListener(evt, checkDirectJ);
        checkDirectJ()
    })

    $(".page21 .du").click(function(){
        //$(".page21").hide();
        $(".page21").removeClass("active")
        $("#audioFile1")[0].play()
        $(".du").removeClass("active")
    })

    $("#audioFile1")[0].onended=function(){
        $(".page21").hide();
        $(".page3").show()
        $(".page5").show()
        $(".page3").addClass("active")
        if(userPlay){
            playMusic(true,true)
        }
        $(".mu1").css("z-index","1100")
        $(".mu2").css("z-index","1100")
        $(".jump2").hide();
        $(".jump1").hide();
        var evt = "onorientationchanged" in window ? "orientationchanged" : "resize";
        window.removeEventListener(evt, checkDirectJ);
    }

    $(".page22 .du").click(function(){
        //$(".page22").hide();
        $(".page22").removeClass("active")
        $("#audioFile2")[0].play()
        $(".du").removeClass("active")
    })

    $("#audioFile2")[0].onended=function(){
        $(".page22").hide();
        $(".page3").show()
        $(".page5").show()
        $(".page3").addClass("active")
        if(userPlay){
            playMusic(true,true)
        }
        $(".mu1").css("z-index","1100")
        $(".mu2").css("z-index","1100")
        $(".jump2").hide();
        $(".jump1").hide();
        var evt = "onorientationchanged" in window ? "orientationchanged" : "resize";
        window.removeEventListener(evt, checkDirectJ);
    }

    $(".page23 .du").click(function(){
        //$(".page23").hide();
        $(".page23").removeClass("active")
        $("#audioFile3")[0].play()
        $(".du").removeClass("active")
    })

    $("#audioFile3")[0].onended=function(){
        $(".page23").hide();
        $(".page3").show()
        $(".page5").show()
        $(".page3").addClass("active")
        if(userPlay){
            playMusic(true,true)
        }
        $(".mu1").css("z-index","1100")
        $(".mu2").css("z-index","1100")
        $(".jump2").hide();
        $(".jump1").hide();
        var evt = "onorientationchanged" in window ? "orientationchanged" : "resize";
        window.removeEventListener(evt, checkDirectJ);
    }

    $(".page3 .btn1").click(function(){
        window.location="https://pro.m.jd.com/wq/active/UoQSvevf3Wmg5oiBC9rYQsUtCaF/index.html"
    })

    $(".page3 .btn2").click(function(){
        $(".page3").hide()
        $(".page5").hide()
        $(".videoDiv").hide()
        $(".page1").show()
        $(".mu1").css("z-index","119")
        $(".mu2").css("z-index","119")
    })

    $(".page3 .btn3").click(function(){
        $(".page4").show()
    })

    $(".page4").click(function(){
        $(".page4").hide()
    })

    $(".musicBtn1").click(function(){
        if(userPlay){
            playMusic(false,true)
        }
        else{
            playMusic(true,true)
        }
    })

    //$(".musicBtn2").click(function(){
    //   if(userPlay){
    //        playMusic(false)
    //    }
    //    else{
    //        playMusic(true)
    //    }
    //})

    function playMusic(statue,isClick){
        var audio=document.getElementById("myMusic")
        if(statue){
            $(".musicBtn1").attr("src",'img/p/music1.png')
            //$(".musicBtn2").attr("src",'img/p/music.png')
            audio.play()
            if(isClick){
                userPlay=true;
            }
        }
        else{
            $(".musicBtn1").attr("src",'img/p/musicoff1.png')
            //$(".musicBtn2").attr("src",'img/p/musicoff.png')
            audio.pause()
            if(isClick){
                userPlay=false;
            }
        }
    }

    $(".jump").click(function(){
        var evt = "onorientationchanged" in window ? "orientationchanged" : "resize";
        window.removeEventListener(evt, checkDirectJ);
        $(".jump2").hide();
        $(".jump1").hide();
        $(".page21").hide();
        $(".page21").removeClass("active")
        $(".page22").hide();
        $(".page22").removeClass("active")
        $(".page23").hide();
        $(".page23").removeClass("active")

        $(".videoDiv").hide()
        $("#audioFile1")[0].pause()
        $("#audioFile1")[0].currentTime=0;
        $("#audioFile2")[0].pause()
        $("#audioFile2")[0].currentTime=0;
        $("#audioFile3")[0].pause()
        $("#audioFile3")[0].currentTime=0;

        $(".mu1").css("z-index","1100")
        $(".mu2").css("z-index","1100")
        $(".du").removeClass("active")
        $(".page3").show()
        $(".page5").show()
        $(".page3").addClass("active")
        if(userPlay){
            playMusic(true,true)
        }
        clearInterval(time1)
        clearInterval(time2)
        clearInterval(time3)

    })

    function checkDirectJ(){
        var a,s;
        a = document.documentElement.clientHeight;
        s = document.documentElement.clientWidth;
        if(a > s){
            $(".jump1").show();
            $(".jump2").hide();
            $(".jump1").attr("style","bottom: 20px;right: 20px;transform:rotate(90deg);top: auto;width: 14%;display:block;z-index:140;");
        }
        else{
            $(".jump2").show();
            $(".jump1").hide();
        }
    }
})