if($(".sub_nav").length>0){var sub_nav=$(".sub_nav").offset().top;}
var scroll_height=document.body.scrollTop+document.documentElement.scrollTop,sub_navm=$(".sub_navm").offset().top,currscroll=0;$(window).scroll(function(){currscroll++;scroll_height=document.body.scrollTop+document.documentElement.scrollTop;if(scroll_height>sub_nav){$(".sub_nav").addClass("sub_nav_float");}else{$(".sub_nav").removeClass("sub_nav_float");}
if(scroll_height>sub_navm){$(".sub_navm").addClass("sub_navm_an");}else{$(".sub_navm").removeClass("sub_navm_an");}
if(currscroll>10){$(".haschildm dl").removeClass("dlshow");$(".haschildm_an").removeClass("haschildm_an")
$(".sub_navm").removeClass("sub_navm_an2");$(".sub_navm ul").slideUp();currscroll=0;}});$(".haschildm").bind("click",function(){var thisclass=$(this).attr("class");if(thisclass==="haschildm"){$(".haschildm dl").removeClass("dlshow");$(this).children("dl").addClass("dlshow");$(this).addClass("haschildm_an").siblings().removeClass("haschildm_an");}else{$(".haschildm dl").removeClass("dlshow");$(this).removeClass("haschildm_an");}})
$(".sub_navm_arrow").bind("click",function(){var thiscalss=$(".sub_navm").attr("class");if(thiscalss.indexOf("sub_navm_an2")>0){$(".haschildm dl").removeClass("dlshow");$(".haschildm_an").removeClass("haschildm_an")
$(".sub_navm").removeClass("sub_navm_an2");$(".sub_navm ul").slideUp();}else{$(".sub_navm").addClass("sub_navm_an2");$(".sub_navm ul").slideDown();}});if($(".aufe_steps").length>0){var idxs=0,lens=$(".aufe_steps_text li").length-1;$(".aufe_steps_text li").bind("click",function(){idxs=$(this).index();effectes(idxs);});function effectes(idxs){$(".aufe_steps_imgs li").eq(idxs).addClass("active").siblings().removeClass("active");$(".aufe_steps_text li").eq(idxs).addClass("active").siblings().removeClass("active");}
$(".aufe_steps_next").bind("click",function(){idxs++;if(idxs>lens){idxs=0;}
effectes(idxs)});$(".aufe_steps_prev").bind("click",function(){idxs--;if(idxs<0){idxs=lens;}
effectes(idxs)});var sldwidth=$(".aufe_steps_imgs ul").width();$(".aufe_steps_imgs ul").css("height",sldwidth*0.58+"px")
window.onresize=function(){var sldwidth=$(".aufe_steps_imgs ul").width();$(".aufe_steps_imgs ul").css("height",sldwidth*0.58+"px")};}
var pgtrack=$(".pgtrack"),pcos=getos.pcos(),devicesos=getos.devicesos(),crturl=getcurrenturl();if(pcos=="other"){pcos=devicesos;}
crturl=crturl.replace("/","-");for(var i=0;i<pgtrack.length;i++){var _this=pgtrack.eq(i);trcklink=_this.attr("href");if(trcklink.indexOf("?")>0){_this.attr("href",trcklink+"&os="+pcos.toLowerCase()+"&ref="+crturl);}else{_this.attr("href",trcklink+"?os="+pcos.toLowerCase()+"&ref="+crturl);}}