Vim�UnDo� Rf����J7�����|,`��-B����(                                      N�<Z    _�                             ����                                                                                                                                                                                                                                                                                                                                                  V        N�<W     �                  E/* liulyliu@sohu-inc.com : Mon Nov 28 2011 17:55:20 GMT+0800 (CST) */  3�var drawPassportNewInit=function(a,b){var c=encodeURIComponent(location.href),d=PassportCardList[a];d.loginMsg=!0,d._drawLoginForm=function(){this.cElement.innerHTML=['<div class="d1"><h3>\u7528\u6237\u767b\u5f55</h3>','<form method="post" onsubmit="return PassportCardList[',a,'].doLogin();" name="loginform">','<div id="ppcontid" class="d3">','<p><label><code>\u90ae\u7bb1\uff1a</code><input id="login-email" type="text" name="email" class="tx" autocomplete="off" disableautocomplete="" /></label></p>','<p><label><code>\u5bc6\u7801\uff1a</code><input type="password" name="password" class="tx" autocomplete="off" disableautocomplete="" /></label></p>','<div class="error tips"></div>','<p class="p"><input type="checkbox" value="1" checked="checked" class="cb" name="persistentcookie" />\u8bb0\u4f4f\u767b\u5f55\u72b6\u6001 &nbsp;&nbsp;','<a href="http://passport.sohu.com/web/RecoverPwdInput.action" class="color3">\u5fd8\u8bb0\u5bc6\u7801\uff1f</a></p>','<p class="p1"><input type="submit" class="btn_login" value="" /><a href="/user/reg/reginfo.do?bru=',escape(location.href),'" class="color3">\u65b0\u7528\u6237\u6ce8\u518c</a></p>',"</div></form></div>"].join("")},d._drawPassportCard=function(){$("#loginBox").hide(),d.cElement.innerHTML=['<div class="ppcontent"><div id="ppcontid"></div></div>'].join(""),sohuHD.gCallback&&(sohuHD.gCallback(),sohuHD.gCallback=null)},d.drawPassportInfo=function(){},d.drawPassport(b)};(function(a){var b=sohuHD.isLogin=function(){PassportSC.parsePassportCookie();var a=PassportSC.cookieHandle(),b;return a?b=!0:b=!1,b},c=sohuHD.prizeList=["1\u5929VIP\u4f53\u9a8c\u5361","\u7535\u5f71\u4efb\u9009\u5361","30\u5929VIP\u4f53\u9a8c\u5361","\u5c0f\u955c\u5b50","\u6536\u97f3\u673a","\u5c0f\u72d0\u72f8","\u4e2d\u72d0\u72f8","\u80cc\u5305","\u641c\u72d0\u5a31\u4e50\u8863\u670d","\u5927\u9ec4\u8702\u6a21\u578b","\u9b54\u517d30\u5143\u70b9\u5361","\u641c\u72d0\u56f4\u8116","Macbook Air","iPad 2","\u62cd\u7acb\u5f97","iPhone 4"];a(function(){var d="http://tv.sohu.com/upload/20110516space/skin/lottery/lottery.swf?v=2011101902",e=['<object width="635" height="650" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" name="player_ob" id="player_ob">','<param value="always" name="allowScriptAccess">','<param value="',d,'" name="movie">','<param value="high" name="quality">','<param value="false" name="allowFullScreen">','<param value="transparent" name="wmode">','<param value="" name="flashvars">','<embed width="635" height="650" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" allowfullscreen="false" allowscriptaccess="always" quality="high" flashvars="" src="',d,'" name="player_em" id="player_em">',"</object>"].join("");a("#lotflash").html(e),PassportSC.drawPassportNew(a("#loginBox")[0],1074),b()&&a.getJSON("/user/lottery/currinfo.do",function(b){sohuHD._times=b.times;var c=function(){if(sohuHD._currinfo!=1){setTimeout(c,500);return}var d={};a.getJSON("/user/lottery/checkSpecial.do",function(c){c.status==1&&(d=c);var e=['<div class="d1"><h3>Hi ',sohuHD.strSub(unescape(user_params.nickName),22),'</h3><div class="cfix"><a href="/user/',user_params.id,'" class="pic l" title="',unescape(user_params.nickName),'" target="_blank"><img src="',user_params.smallPhoto||"http://tv.sohu.com/upload/space/skin/imgs/avatar_s.jpg",'" alt="',unescape(user_params.nickName),'" width="50" height="50"></a><div class="d1s r"><p>\u5269\u4f59<strong id="lottery-num" class="color3">',b.times,'</strong>\u6b21\u6447\u5956\u673a\u4f1a</p><p>\u5171\u83b7\u5f97<strong class="color3">',b.prizes,'</strong>\u4e2a\u5956\u54c1&nbsp;&nbsp;<a id="modify-info" class="color4" href="#">\u4fee\u6539\u9886\u5956\u4fe1\u606f</a></p></div></div>',"<ul><li>"+(d.name==1?'<div class="tcBox">\u60a8\u5df2\u7ecf\u66f4\u6539\u8fc7\u552f\u4e00\u6635\u79f0</div>':'<a href="/user/profile/basic.do" class="btnZp" target="_blank">\u62a2\u6ce8\u6635\u79f0</a>\u4fee\u6539\u6635\u79f0\uff0c\u5b8c\u5584\u57fa\u672c\u8d44\u6599')+"</li>",,"<li>"+(d.connect==1?'<div class="tcBox">\u60a8\u5df2\u7ecf\u540c\u6b65\u8fc7\u7b2c\u4e09\u65b9\u5e10\u53f7</div>':'<a href="/user/connect/index.do" class="btnZp" target="_blank">\u540c\u6b65\u8bbe\u7f6e</a>\u540c\u6b65\u7b2c\u4e09\u65b9\u8d26\u53f7\uff0c\u5206\u4eab\u66f4\u591a')+"</li>",'<li><a href="/user/entry/add.do" class="btnZp" target="_blank">\u53d1\u5e03\u5f71\u8bc4</a>\u7f16\u5199\u6700\u65b0\u6700\u70ed\u7684\u5f71\u89c6\u5267\u8bc4\u8bba</li></ul>',"</div>",'<div class="d2 cfix"><p>\u6211\u89c9\u5f97\u8fd9\u4e2a\u6d3b\u52a8\u5f88\u68d2\uff0c\u8f6c\u53d1\u7ed9\u66f4\u591a\u670b\u53cb\u6765\u53c2\u52a0\u5427</p><div>','<a title="\u8f6c\u53d1\u81f3\u641c\u72d0\u5fae\u535a" href="javascript:void(0)" onclick="javascript:jump(\'weibosohu\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon01.gif"></a>','<a title="\u8f6c\u53d1\u81f3QQ\u7a7a\u95f4" href="javascript:void(0)" onclick="javascript:jump(\'qq\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon03.gif"></a>','<a title="\u8f6c\u53d1\u81f3\u4eba\u4eba\u7f51" href="javascript:void(0)" onclick="javascript:jump(\'renren\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon02.gif"></a>','<a title="\u8f6c\u53d1\u81f3\u65b0\u6d6a\u5fae\u535a" href="javascript:void(0)" onclick="javascript:jump(\'weibosina\')"><img width="16" height="16" src="http://i2.itc.cn/20110426/7c2_ebf9c59b_8cdf_a522_dc23_de88bf468536_1.gif"></a>','<a title="\u8f6c\u53d1\u81f3\u5f00\u5fc3\u7f51" href="javascript:void(0)" onclick="javascript:jump(\'kaixin001\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon05.gif"></a>','<a title="\u5206\u4eab\u5230\u817e\u8baf\u670b\u53cb" href="javascript:void(0)" onclick="javascript:jump(\'txpengyou\')"><img src="http://i3.itc.cn/20111018/7c2_edea7d7f_1c80_5419_a26a_6741bd7e68c1_1.png" alt="\u5206\u4eab\u5230\u817e\u8baf\u670b\u53cb"></a>','<a title="\u5206\u4eab\u5230\u817e\u8baf\u5fae\u535a" href="javascript:void(0)" onclick="javascript:jump(\'tqq\')"><img width="16" height="16" src="http://i0.itc.cn/20110331/7c2_e4fd204a_3ca2_88be_e63d_a1727200bf67_1.png"></a>','<a title="\u8f6c\u53d1\u81f3\u7f51\u6613\u5fae\u535a" href="javascript:void(0)" onclick="javascript:jump(\'163\')"><img width="16" height="16" src="http://i0.itc.cn/20110727/7c2_3d434722_46fe_c4f1_5374_bad0f2424256_1.gif"></a>','<a title="\u8f6c\u53d1\u81f3\u767d\u793e\u4f1a" href="javascript:void(0)" onclick="javascript:jump(\'baishehui\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon04.gif"></a>','<a title="\u63a8\u8350\u5230\u8c46\u74e3" href="javascript:void(0)" onclick="javascript:jump(\'douban\')"><img width="16" height="16" src="http://tv.sohu.com/upload/101116tvplay/images/pic06.gif"></a>','<a title="\u5206\u4eab\u5230\u98de\u4fe1\u7a7a\u95f4" href="javascript:void(0)" onclick="javascript:jump(\'fx\')"><img width="16" height="16" \t\t\tsrc="http://i2.itc.cn/20110610/7c2_9c684a4e_4ea5_33c9_071e_d9f2b7fa308f_1.png"></a>','<a title="\u8f6c\u53d1\u81f351" href="javascript:void(0)" onclick="javascript:jump(\'51\')"><img width="16" height="16" src="http://i0.itc.cn/20110727/7c2_c1f3cd6d_7c96_736f_38eb_95eb913ab451_1.png"></a>',"</div></div>"].join("");a("#userBox").html(e).parent().removeClass("blockRA_login").addClass("blockRA_logined"),a("#modify-info").click(function(a){a&&a.preventDefault(),blockForm()})})};c()}),sohuHD.gCallback=function(){location.reload()},a.getJSON("/user/a/lottery/luckyList.do",function(b){if(b.data){var d=b.data.list,e=[];for(var f=0;f<d.length;++f)e.push('<li><em class="nm" title="',d[f].name,'">',sohuHD.strSub(d[f].name,14),"</em>\u83b7\u5f97\u4e86",c[d[f].prizeType-1],'<em class="e"><span>',d[f].time,"</span></em></li>");a("#lucky-list").html(e.join("")),a("#lucky-num").text(b.data.size)}}),a.getJSON("/user/a/lottery/attendList.do",function(b){_e(b);var c=b.data.list,d=[];for(var e=0;e<c.length;++e)d.push('<li><a href="',c[e].url,'" title="',c[e].name,'" target="_blank" class="pic"><img src="',c[e].pic||"http://tv.sohu.com/upload/space/skin/imgs/avatar_s.jpg",'" alt="',c[e].name,'" width="48" height="48"></a><strong><a href="',c[e].url,'" title="',c[e].name,'" target="_blank">',c[e].name,"</a></strong></li>");a("#join-list").html(d.join("")),a("#join-num").text(b.data.size)})})})(jQuery);var blockError=function(){var a=[];a.push('<div class="detail fail">\u670d\u52a1\u5668\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5</div>'),sohuHD.block(null,{fullHtml:a.join(""),minWidth:420})},blockFail=function(a,b){$("#lottery-num").text(a||0),sohuHD._times=a||0;var c=[];a>0?c.push('<div class="detail fail">\u6ca1\u6709\u6447\u5230\u5956\u54c1<br />\u4f60\u8fd8\u6709<strong class="color3">',a,"</strong>\u6b21\u673a\u4f1a\uff0c\u518d\u73a9\u4e00\u6b21\u5427\uff01",'<br /><button class="btns" onclick="sohuHD.closeBlock();"><span>\u518d\u73a9\u4e00\u6b21</span></button></div>'):c.push('<div class="detail fail">',b?"":"\u6ca1\u6709\u6447\u5230\u5956\u54c1<br />","\u4f60\u5df2\u7ecf\u6ca1\u6709\u6447\u5956\u673a\u4f1a\u4e86\uff0c\u9a6c\u4e0a\u53bb",'<a class="color3" href="/user/entry/add.do" target="_blank" onclick="sohuHD.closeBlock();">\u5199\u5f71\u8bc4</a><br />\u8d5a\u53d6\u6447\u5956\u673a\u4f1a\u5427\uff01','<br><a class="btns" href="/user/entry/add.do" target="_blank" onclick="sohuHD.closeBlock();"><span>\u53bb\u5199\u5f71\u8bc4</span></a></div>'),sohuHD.block(null,{fullHtml:c.join(""),minWidth:420})},blockSucc=function(a,b){--sohuHD._times,$("#lottery-num").text(sohuHD._times);var c=[];b?c.push('<div class="detail succ">\u83b7\u5f97\u4e86',sohuHD.prizeList[a-1],"<br />\u60a8\u7684\u6fc0\u6d3b\u7801\u4e3a\uff1a",(b+"").replace(/\s/g,""),"<br />\u8bf7\u767b\u5f55\u641c\u72d0\u89c6\u9891\u4ed8\u8d39\u9891\u9053\u6fc0\u6d3b\u4f7f\u7528",'<a href="http://store.tv.sohu.com/view/card_pw_act.jsp" target="_blank" ','class="btns"><span>\u53bb\u4f7f\u7528</span></a></div>'):c.push('<div class="detail succ">\u83b7\u5f97\u4e86',sohuHD.prizeList[a-1],'<button class="btns" onclick="blockForm();"><span>\u586b\u5199\u9886\u5956\u4fe1\u606f</span></button></div>'),sohuHD.block(null,{fullHtml:c.join(""),minWidth:420})},blockForm=function(){var a=function(a){var b=['<div class="form"><h3><img width="95" height="25" src="http://tv.sohu.com/upload/20110516space/skin/lottery/imgs/bt_4.png"></h3>','<p class="p1">\u5b9e\u7269\u5956\u54c1\u5c06\u4e8e\u6d3b\u52a8\u7ed3\u675f\u540e10\u4e2a\u5de5\u4f5c\u65e5\u7edf\u4e00\u90ae\u5bc4\uff0c\u8bf7\u60a8\u8010\u5fc3\u7b49\u5f85\u3002',"\u8bf7\u60a8\u52a1\u5fc5\u6b63\u786e\u65e0\u8bef\u7684\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\uff0c\u5982\u56e0\u83b7\u5956\u8005\u672a\u80fd\u53ca\u65f6\u586b\u5199\u6709\u6548\u4fe1 \u606f\u9020\u6210\u5956\u54c1\u65e0\u6cd5\u90ae\u5bc4\uff0c\u8d23\u4efb\u7531\u83b7\u5956\u8005\u81ea\u8d1f\u3002</p>",'<form id="address" action=""><p class="first"></p>','<label>\u59d3&nbsp;&nbsp;&nbsp;&nbsp;\u540d\uff1a<input name="name" value="',unescape(a.name||""),'" class="txt" type="text" /></label>','<label>\u624b\u673a\u53f7\u7801\uff1a<input name="phone" value="',unescape(a.phone||""),'" class="txt" type="text" maxlength="11" /></label>','<label>\u90ae\u5bc4\u5730\u5740\uff1a<input name="address" value="',unescape(a.address||""),'" class="txt" type="text" /></label>','<label>\u7535\u5b50\u90ae\u7bb1\uff1a<input name="email" value="',unescape(a.email||""),'" class="txt" type="email" /></label>','<button class="btns" type="submit"><span>\u5b8c\u6210</span></button></form></div>'].join("");sohuHD.block(null,{fullHtml:b,minWidth:420});var c={name:"\u771f\u5b9e\u59d3\u540d",phone:"\u624b\u673a\u53f7\u7801",address:"\u90ae\u5bc4\u5730\u5740",email:"\u7535\u5b50\u90ae\u7bb1"},d=$("#address"),e=!0;d.find("input").bind({focus:function(){$.trim(this.value)!=""&&($(this).css("border-color","#CAE6EF"),e=!0)},blur:function(){$.trim(this.value)==""?($(this).css("border-color","#c00"),e=!1):($(this).css("border-color","#CAE6EF"),e=!0)}}),d.submit(function(){e=!0;var a={};return d.find('input[name!="submit"]').each(function(b,f){if($.trim(f.value)=="")return d.find("p.first").html("\u8bf7\u6b63\u786e\u586b\u5199"+c[f.name]).show(),$(f).css("border-color","#c00").focus(),e=!1,!1;a[f.name]=escape(f.value)}),e&&(sohuHD.closeBlock(),$.post("/user/lottery/saveUserInfo.do",a,function(a){_e(a),a.status==1?sohuHD.block("success",{fullHtml:'<p class="post-tips">\u4fdd\u5b58\u6210\u529f:)</p>',minWidth:200,autohide:3e3}):sohuHD.block("fail",{fullHtml:'<p class="post-tips">\u4fdd\u5b58\u5931\u8d25:(</p>',minWidth:200,autohide:3e3})},"json").error(function(){_e("error")})),!1})};$.getJSON("/user/lottery/getUserInfo.do",function(b){a(b.data||{})})},needLogin=function(){var a=0,b=$("#login-email").val("\u767b\u5f55\u540e\u624d\u80fd\u62bd\u5956\u54e6~~").css("font-weight","bold"),c=b.css("border-color");$("#ppcontid .error").html("\u767b\u5f55\u540e\u624d\u80fd\u62bd\u5956\u54e6");var d=function(){if(a>9){b.val("").css("font-weight","normal").focus();return}a%2==0?b.css("border-color","#c00"):b.css("border-color",c),++a,setTimeout(d,100)};d()}5�_�                             ����                                                                                                                                                                                                                                                                                                                               E          E       V   E    N�<Y    �              �                4'/* liulyliu@sohu-inc.com : Mon Nov 28 2011 17:55:20 GMT+0800 (CST) */ var drawPassportNewInit=function(a,b){var c=encodeURIComponent(location.href),d=PassportCardList[a];d.loginMsg=!0,d._drawLoginForm=function(){this.cElement.innerHTML=['<div class="d1"><h3>\u7528\u6237\u767b\u5f55</h3>','<form method="post" onsubmit="return PassportCardList[',a,'].doLogin();" name="loginform">','<div id="ppcontid" class="d3">','<p><label><code>\u90ae\u7bb1\uff1a</code><input id="login-email" type="text" name="email" class="tx" autocomplete="off" disableautocomplete="" /></label></p>','<p><label><code>\u5bc6\u7801\uff1a</code><input type="password" name="password" class="tx" autocomplete="off" disableautocomplete="" /></label></p>','<div class="error tips"></div>','<p class="p"><input type="checkbox" value="1" checked="checked" class="cb" name="persistentcookie" />\u8bb0\u4f4f\u767b\u5f55\u72b6\u6001 &nbsp;&nbsp;','<a href="http://passport.sohu.com/web/RecoverPwdInput.action" class="color3">\u5fd8\u8bb0\u5bc6\u7801\uff1f</a></p>','<p class="p1"><input type="submit" class="btn_login" value="" /><a href="/user/reg/reginfo.do?bru=',escape(location.href),'" class="color3">\u65b0\u7528\u6237\u6ce8\u518c</a></p>',"</div></form></div>"].join("")},d._drawPassportCard=function(){$("#loginBox").hide(),d.cElement.innerHTML=['<div class="ppcontent"><div id="ppcontid"></div></div>'].join(""),sohuHD.gCallback&&(sohuHD.gCallback(),sohuHD.gCallback=null)},d.drawPassportInfo=function(){},d.drawPassport(b)};(function(a){var b=sohuHD.isLogin=function(){PassportSC.parsePassportCookie();var a=PassportSC.cookieHandle(),b;return a?b=!0:b=!1,b},c=sohuHD.prizeList=["1\u5929VIP\u4f53\u9a8c\u5361","\u7535\u5f71\u4efb\u9009\u5361","30\u5929VIP\u4f53\u9a8c\u5361","\u5c0f\u955c\u5b50","\u6536\u97f3\u673a","\u5c0f\u72d0\u72f8","\u4e2d\u72d0\u72f8","\u80cc\u5305","\u641c\u72d0\u5a31\u4e50\u8863\u670d","\u5927\u9ec4\u8702\u6a21\u578b","\u9b54\u517d30\u5143\u70b9\u5361","\u641c\u72d0\u56f4\u8116","Macbook Air","iPad 2","\u62cd\u7acb\u5f97","iPhone 4"];a(function(){var d="http://tv.sohu.com/upload/20110516space/skin/lottery/lottery.swf?v=2011101902",e=['<object width="635" height="650" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" name="player_ob" id="player_ob">','<param value="always" name="allowScriptAccess">','<param value="',d,'" name="movie">','<param value="high" name="quality">','<param value="false" name="allowFullScreen">','<param value="transparent" name="wmode">','<param value="" name="flashvars">','<embed width="635" height="650" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" allowfullscreen="false" allowscriptaccess="always" quality="high" flashvars="" src="',d,'" name="player_em" id="player_em">',"</object>"].join("");a("#lotflash").html(e),PassportSC.drawPassportNew(a("#loginBox")[0],1074),b()&&a.getJSON("/user/lottery/currinfo.do",function(b){sohuHD._times=b.times;var c=function(){if(sohuHD._currinfo!=1){setTimeout(c,500);return}var d={};a.getJSON("/user/lottery/checkSpecial.do",function(c){c.status==1&&(d=c);var e=['<div class="d1"><h3>Hi ',sohuHD.strSub(unescape(user_params.nickName),22),'</h3><div class="cfix"><a href="/user/',user_params.id,'" class="pic l" title="',unescape(user_params.nickName),'" target="_blank"><img src="',user_params.smallPhoto||"http://tv.sohu.com/upload/space/skin/imgs/avatar_s.jpg",'" alt="',unescape(user_params.nickName),'" width="50" height="50"></a><div class="d1s r"><p>\u5269\u4f59<strong id="lottery-num" class="color3">',b.times,'</strong>\u6b21\u6447\u5956\u673a\u4f1a</p><p>\u5171\u83b7\u5f97<strong class="color3">',b.prizes,'</strong>\u4e2a\u5956\u54c1&nbsp;&nbsp;<a id="modify-info" class="color4" href="#">\u4fee\u6539\u9886\u5956\u4fe1\u606f</a></p></div></div>',"<ul><li>"+(d.name==1?'<div class="tcBox">\u60a8\u5df2\u7ecf\u66f4\u6539\u8fc7\u552f\u4e00\u6635\u79f0</div>':'<a href="/user/profile/basic.do" class="btnZp" target="_blank">\u62a2\u6ce8\u6635\u79f0</a>\u4fee\u6539\u6635\u79f0\uff0c\u5b8c\u5584\u57fa\u672c\u8d44\u6599')+"</li>",,"<li>"+(d.connect==1?'<div class="tcBox">\u60a8\u5df2\u7ecf\u540c\u6b65\u8fc7\u7b2c\u4e09\u65b9\u5e10\u53f7</div>':'<a href="/user/connect/index.do" class="btnZp" target="_blank">\u540c\u6b65\u8bbe\u7f6e</a>\u540c\u6b65\u7b2c\u4e09\u65b9\u8d26\u53f7\uff0c\u5206\u4eab\u66f4\u591a')+"</li>",'<li><a href="/user/entry/add.do" class="btnZp" target="_blank">\u53d1\u5e03\u5f71\u8bc4</a>\u7f16\u5199\u6700\u65b0\u6700\u70ed\u7684\u5f71\u89c6\u5267\u8bc4\u8bba</li></ul>',"</div>",'<div class="d2 cfix"><p>\u6211\u89c9\u5f97\u8fd9\u4e2a\u6d3b\u52a8\u5f88\u68d2\uff0c\u8f6c\u53d1\u7ed9\u66f4\u591a\u670b\u53cb\u6765\u53c2\u52a0\u5427</p><div>','<a title="\u8f6c\u53d1\u81f3\u641c\u72d0\u5fae\u535a" href="javascript:void(0)" onclick="javascript:jump(\'weibosohu\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon01.gif"></a>','<a title="\u8f6c\u53d1\u81f3QQ\u7a7a\u95f4" href="javascript:void(0)" onclick="javascript:jump(\'qq\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon03.gif"></a>','<a title="\u8f6c\u53d1\u81f3\u4eba\u4eba\u7f51" href="javascript:void(0)" onclick="javascript:jump(\'renren\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon02.gif"></a>','<a title="\u8f6c\u53d1\u81f3\u65b0\u6d6a\u5fae\u535a" href="javascript:void(0)" onclick="javascript:jump(\'weibosina\')"><img width="16" height="16" src="http://i2.itc.cn/20110426/7c2_ebf9c59b_8cdf_a522_dc23_de88bf468536_1.gif"></a>','<a title="\u8f6c\u53d1\u81f3\u5f00\u5fc3\u7f51" href="javascript:void(0)" onclick="javascript:jump(\'kaixin001\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon05.gif"></a>','<a title="\u5206\u4eab\u5230\u817e\u8baf\u670b\u53cb" href="javascript:void(0)" onclick="javascript:jump(\'txpengyou\')"><img src="http://i3.itc.cn/20111018/7c2_edea7d7f_1c80_5419_a26a_6741bd7e68c1_1.png" alt="\u5206\u4eab\u5230\u817e\u8baf\u670b\u53cb"></a>','<a title="\u5206\u4eab\u5230\u817e\u8baf\u5fae\u535a" href="javascript:void(0)" onclick="javascript:jump(\'tqq\')"><img width="16" height="16" src="http://i0.itc.cn/20110331/7c2_e4fd204a_3ca2_88be_e63d_a1727200bf67_1.png"></a>','<a title="\u8f6c\u53d1\u81f3\u7f51\u6613\u5fae\u535a" href="javascript:void(0)" onclick="javascript:jump(\'163\')"><img width="16" height="16" src="http://i0.itc.cn/20110727/7c2_3d434722_46fe_c4f1_5374_bad0f2424256_1.gif"></a>','<a title="\u8f6c\u53d1\u81f3\u767d\u793e\u4f1a" href="javascript:void(0)" onclick="javascript:jump(\'baishehui\')"><img width="16" height="16" src="http://tv.sohu.com/upload/110325tvnews/images/icon04.gif"></a>','<a title="\u63a8\u8350\u5230\u8c46\u74e3" href="javascript:void(0)" onclick="javascript:jump(\'douban\')"><img width="16" height="16" src="http://tv.sohu.com/upload/101116tvplay/images/pic06.gif"></a>','<a title="\u5206\u4eab\u5230\u98de\u4fe1\u7a7a\u95f4" href="javascript:void(0)" onclick="javascript:jump(\'fx\')"><img width="16" height="16" \t\t\tsrc="http://i2.itc.cn/20110610/7c2_9c684a4e_4ea5_33c9_071e_d9f2b7fa308f_1.png"></a>','<a title="\u8f6c\u53d1\u81f351" href="javascript:void(0)" onclick="javascript:jump(\'51\')"><img width="16" height="16" src="http://i0.itc.cn/20110727/7c2_c1f3cd6d_7c96_736f_38eb_95eb913ab451_1.png"></a>',"</div></div>"].join("");a("#userBox").html(e).parent().removeClass("blockRA_login").addClass("blockRA_logined"),a("#modify-info").click(function(a){a&&a.preventDefault(),blockForm()})})};c()}),sohuHD.gCallback=function(){location.reload()},a.getJSON("/user/a/lottery/luckyList.do",function(b){if(b.data){var d=b.data.list,e=[];for(var f=0;f<d.length;++f)e.push('<li><em class="nm" title="',d[f].name,'">',sohuHD.strSub(d[f].name,14),"</em>\u83b7\u5f97\u4e86",c[d[f].prizeType-1],'<em class="e"><span>',d[f].time,"</span></em></li>");a("#lucky-list").html(e.join("")),a("#lucky-num").text(b.data.size)}}),a.getJSON("/user/a/lottery/attendList.do",function(b){_e(b);var c=b.data.list,d=[];for(var e=0;e<c.length;++e)d.push('<li><a href="',c[e].url,'" title="',c[e].name,'" target="_blank" class="pic"><img src="',c[e].pic||"http://tv.sohu.com/upload/space/skin/imgs/avatar_s.jpg",'" alt="',c[e].name,'" width="48" height="48"></a><strong><a href="',c[e].url,'" title="',c[e].name,'" target="_blank">',c[e].name,"</a></strong></li>");a("#join-list").html(d.join("")),a("#join-num").text(b.data.size)})})})(jQuery);var blockError=function(){var a=[];a.push('<div class="detail fail">\u670d\u52a1\u5668\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5</div>'),sohuHD.block(null,{fullHtml:a.join(""),minWidth:420})},blockFail=function(a,b){$("#lottery-num").text(a||0),sohuHD._times=a||0;var c=[];a>0?c.push('<div class="detail fail">\u6ca1\u6709\u6447\u5230\u5956\u54c1<br />\u4f60\u8fd8\u6709<strong class="color3">',a,"</strong>\u6b21\u673a\u4f1a\uff0c\u518d\u73a9\u4e00\u6b21\u5427\uff01",'<br /><button class="btns" onclick="sohuHD.closeBlock();"><span>\u518d\u73a9\u4e00\u6b21</span></button></div>'):c.push('<div class="detail fail">',b?"":"\u6ca1\u6709\u6447\u5230\u5956\u54c1<br />","\u4f60\u5df2\u7ecf\u6ca1\u6709\u6447\u5956\u673a\u4f1a\u4e86\uff0c\u9a6c\u4e0a\u53bb",'<a class="color3" href="/user/entry/add.do" target="_blank" onclick="sohuHD.closeBlock();">\u5199\u5f71\u8bc4</a><br />\u8d5a\u53d6\u6447\u5956\u673a\u4f1a\u5427\uff01','<br><a class="btns" href="/user/entry/add.do" target="_blank" onclick="sohuHD.closeBlock();"><span>\u53bb\u5199\u5f71\u8bc4</span></a></div>'),sohuHD.block(null,{fullHtml:c.join(""),minWidth:420})},blockSucc=function(a,b){--sohuHD._times,$("#lottery-num").text(sohuHD._times);var c=[];b?c.push('<div class="detail succ">\u83b7\u5f97\u4e86',sohuHD.prizeList[a-1],"<br />\u60a8\u7684\u6fc0\u6d3b\u7801\u4e3a\uff1a",(b+"").replace(/\s/g,""),"<br />\u8bf7\u767b\u5f55\u641c\u72d0\u89c6\u9891\u4ed8\u8d39\u9891\u9053\u6fc0\u6d3b\u4f7f\u7528",'<a href="http://store.tv.sohu.com/view/card_pw_act.jsp" target="_blank" ','class="btns"><span>\u53bb\u4f7f\u7528</span></a></div>'):c.push('<div class="detail succ">\u83b7\u5f97\u4e86',sohuHD.prizeList[a-1],'<button class="btns" onclick="blockForm();"><span>\u586b\u5199\u9886\u5956\u4fe1\u606f</span></button></div>'),sohuHD.block(null,{fullHtml:c.join(""),minWidth:420})},blockForm=function(){var a=function(a){var b=['<div class="form"><h3><img width="95" height="25" src="http://tv.sohu.com/upload/20110516space/skin/lottery/imgs/bt_4.png"></h3>','<p class="p1">\u5b9e\u7269\u5956\u54c1\u5c06\u4e8e\u6d3b\u52a8\u7ed3\u675f\u540e10\u4e2a\u5de5\u4f5c\u65e5\u7edf\u4e00\u90ae\u5bc4\uff0c\u8bf7\u60a8\u8010\u5fc3\u7b49\u5f85\u3002',"\u8bf7\u60a8\u52a1\u5fc5\u6b63\u786e\u65e0\u8bef\u7684\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\uff0c\u5982\u56e0\u83b7\u5956\u8005\u672a\u80fd\u53ca\u65f6\u586b\u5199\u6709\u6548\u4fe1 \u606f\u9020\u6210\u5956\u54c1\u65e0\u6cd5\u90ae\u5bc4\uff0c\u8d23\u4efb\u7531\u83b7\u5956\u8005\u81ea\u8d1f\u3002</p>",'<form id="address" action=""><p class="first"></p>','<label>\u59d3&nbsp;&nbsp;&nbsp;&nbsp;\u540d\uff1a<input name="name" value="',unescape(a.name||""),'" class="txt" type="text" /></label>','<label>\u624b\u673a\u53f7\u7801\uff1a<input name="phone" value="',unescape(a.phone||""),'" class="txt" type="text" maxlength="11" /></label>','<label>\u90ae\u5bc4\u5730\u5740\uff1a<input name="address" value="',unescape(a.address||""),'" class="txt" type="text" /></label>','<label>\u7535\u5b50\u90ae\u7bb1\uff1a<input name="email" value="',unescape(a.email||""),'" class="txt" type="email" /></label>','<button class="btns" type="submit"><span>\u5b8c\u6210</span></button></form></div>'].join("");sohuHD.block(null,{fullHtml:b,minWidth:420});var c={name:"\u771f\u5b9e\u59d3\u540d",phone:"\u624b\u673a\u53f7\u7801",address:"\u90ae\u5bc4\u5730\u5740",email:"\u7535\u5b50\u90ae\u7bb1"},d=$("#address"),e=!0;d.find("input").bind({focus:function(){$.trim(this.value)!=""&&($(this).css("border-color","#CAE6EF"),e=!0)},blur:function(){$.trim(this.value)==""?($(this).css("border-color","#c00"),e=!1):($(this).css("border-color","#CAE6EF"),e=!0)}}),d.submit(function(){e=!0;var a={};return d.find('input[name!="submit"]').each(function(b,f){if($.trim(f.value)=="")return d.find("p.first").html("\u8bf7\u6b63\u786e\u586b\u5199"+c[f.name]).show(),$(f).css("border-color","#c00").focus(),e=!1,!1;a[f.name]=escape(f.value)}),e&&(sohuHD.closeBlock(),$.post("/user/lottery/saveUserInfo.do",a,function(a){_e(a),a.status==1?sohuHD.block("success",{fullHtml:'<p class="post-tips">\u4fdd\u5b58\u6210\u529f:)</p>',minWidth:200,autohide:3e3}):sohuHD.block("fail",{fullHtml:'<p class="post-tips">\u4fdd\u5b58\u5931\u8d25:(</p>',minWidth:200,autohide:3e3})},"json").error(function(){_e("error")})),!1})};$.getJSON("/user/lottery/getUserInfo.do",function(b){a(b.data||{})})},needLogin=function(){var a=0,b=$("#login-email").val("\u767b\u5f55\u540e\u624d\u80fd\u62bd\u5956\u54e6~~").css("font-weight","bold"),c=b.css("border-color");$("#ppcontid .error").html("\u767b\u5f55\u540e\u624d\u80fd\u62bd\u5956\u54e6");var d=function(){if(a>9){b.val("").css("font-weight","normal").focus();return}a%2==0?b.css("border-color","#c00"):b.css("border-color",c),++a,setTimeout(d,100)};d()}5��