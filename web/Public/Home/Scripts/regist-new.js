function YMDLinkage(_1,_2,_3,_4,_5,_6){
this.yearNode=document.getElementById(_1);
this.monthNode=document.getElementById(_2);
this.dateNode=document.getElementById(_3);
if(!this.yearNode||!this.monthNode||!this.dateNode){
return;
}
this.selectedYear=_4||this.yearNode.value;
this.selectedMonth=_5||this.monthNode.value;
this.selectedDate=_6||this.dateNode.value;
this.init();
}
YMDLinkage.prototype={clear:function(_7){
while(_7.hasChildNodes()){
_7.removeChild(_7.childNodes[0]);
}
},createOption:function(_8,_9,_a){
var _b=document.createElement("option");
_b.value=_8;
_b.innerHTML=_9;
if(_a){
_b.selected=true;
}
return _b;
},fillYear:function(){
this.clear(this.yearNode);
this.yearNode.appendChild(this.createOption("","--"));
for(var i=Math.max(2010);i>=1950;i--){
this.yearNode.appendChild(this.createOption(i,i,this.selectedYear==i));
}
},fillMonth:function(){
this.clear(this.monthNode);
this.monthNode.appendChild(this.createOption("","--"));
for(var i=1;i<=12;i++){
this.monthNode.appendChild(this.createOption(i,i,this.selectedMonth==i));
}
},fillDate:function(){
this.clear(this.dateNode);
this.dateNode.appendChild(this.createOption("","--"));
if(this.monthNode.value!=""){
var _e=this.getDayNum(this.yearNode.value,this.monthNode.value);
for(var i=1;i<=_e;i++){
this.dateNode.appendChild(this.createOption(i,i,this.selectedDate==i));
}
}
},getDayNum:function(_10,_11){
var _12=[31,28,31,30,31,30,31,31,30,31,30,31];
if((((_10%4==0&&_10%100!=0)||_10%400==0)||(!_10||_10==""))&&_11==2){
return 29;
}else{
return _12[_11-1];
}
},init:function(){
this.fillYear();
this.fillMonth();
this.fillDate();
var _13=this;
jQuery(this.yearNode).bind("change",function(){
_13.selectedDate=_13.dateNode.value;
_13.fillDate();
});
jQuery(this.monthNode).bind("change",function(){
_13.selectedDate=_13.dateNode.value;
_13.fillDate();
});
}};
document.domain="renren.com";
var checkInterface={checkstatus:false,strlen:function(str){
var len=0;
for(var i=0;i<str.length;i++){
if(str.charCodeAt(i)>255){
len+=2;
}else{
len++;
}
}
return len;
},Chinese:function(str){
var _18=0;
for(var i=0;i<str.length;i++){
if(str.charCodeAt(i)>255){
_18++;
}
}
return _18;
},checkSex:function(){
if(jQuery("#hiddentext").val()==""){
jQuery("#sexStatus").removeClass().addClass("judej-select");
jQuery("#nosexError").html("*\u8bf7\u9009\u62e9\u4f60\u662f\u7537\u751f\u3001\u8fd8\u662f\u5973\u751f\uff1f").css("visibility","visible").show();
return false;
}else{
return true;
}
},checkHeadpic:function(){
if(jQuery("#userHead").val()==""){
jQuery("#headStatus").removeClass().addClass("judej-select");
jQuery("#nopicError").html("*\u8bf7\u4e0a\u4f20\u5934\u50cf").css("visibility","visible").show();
return false;
}else{
return true;
}
},checkbirthday:function(){
var _1a=jQuery("#yy").val();
var _1b=jQuery("#mm").val();
var day=jQuery("#dd").val();
if(_1a==""||_1b==""||day==""){
jQuery("#nobirthError").html(SmallSitedefaultTip.regdate).css("visibility","visible").show();
return false;
}
return true;
},checkAntiCode:function(e){
var _1e=jQuery.trim(jQuery(e).val());
var pa=jQuery(e).parent();
if(_1e==""){
jQuery(e).css("border","1px solid red");
pa.find("#codeError").html(SmallSitedefaultTip.regAntiCode).css("visibility","visible").show();
}else{
jQuery(e).css("border","1px solid #80c269");
pa.find("#codeError").css("visibility","hidden");
return true;
}
},checkEmail:function(e){
var _21=jQuery(e).val();
var _22=jQuery(e).parent();
if(_21===""){
this.toggleStauts(e,"#emailStatus",SmallSitedefaultTip.regEmail,"#Error",true);
return false;
}else{
var _23=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!_23.test(_21)){
this.toggleStauts(e,"#emailStatus",SmallSitedefaultTip.emailError,"#Error",true);
return false;
}else{
this.toggleStauts(e,"#emailStatus",SmallSitedefaultTip.notip,"#Error",false);
}
}
return true;
},checkUserNameAjax:function(e){
var _25=encodeURIComponent(jQuery(e).val());
var _26=this;
jQuery.ajax({url:"http://zhan.renren.com/reg/validate/nickname/"+_25,dataType:"json",type:"get",success:function(r){
if(r.code!=0){
var _28="*"+r.msg;
_26.toggleStauts(e,"#nameStatus",_28,"#Error",true);
}else{
_26.toggleStauts(e,"#nameStatus",SmallSitedefaultTip.notip,"#Error",false);
_26.checkstatus=true;
}
},error:function(){
}});
},checkEmailAjax:function(e){
var _2a=jQuery(e).val();
var _2b=this;
jQuery.ajax({url:"http://zhan.renren.com/reg/validate/email/"+_2a,dataType:"json",type:"get",success:function(r){
if(r.code!=0){
var _2d="*"+r.msg;
_2b.toggleStauts(e,"#emailStatus",_2d,"#Error",true);
}else{
_2b.toggleStauts(e,"#emailStatus",SmallSitedefaultTip.notip,"#Error",false);
}
},error:function(){
}});
},checkpwd:function(e){
var _2f=jQuery(e).val();
var _30=jQuery(e).parent();
if(_2f===""){
this.toggleStauts(e,"#pwdStatus",SmallSitedefaultTip.regPwd,"#Error",true);
}else{
jQuery(e).css("border","1px solid red");
if(_2f.length<6||_2f.length>20||_2f=="      "){
this.toggleStauts(e,"#pwdStatus",SmallSitedefaultTip.pwdError,"#Error",true);
}else{
this.toggleStauts(e,"#pwdStatus",SmallSitedefaultTip.notip,"#Error",false);
return true;
}
}
return false;
},checkUserName:function(e){
var _32=jQuery.trim(jQuery(e).val());
var _33=jQuery(e).parent();
if(_32===""){
this.toggleStauts(e,"#nameStatus",SmallSitedefaultTip.regname,"#Error",true);
return false;
}else{
var len=this.strlen(_32);
var _35=this.Chinese(_32);
if(len>12){
this.toggleStauts(e,"#nameStatus",SmallSitedefaultTip.name,"#Error",true);
return false;
}else{
this.toggleStauts(e,"#nameStatus",SmallSitedefaultTip.notip,"#Error",false);
}
}
return true;
},toggleStauts:function(ele,_37,_38,_39,_3a){
var _3b=jQuery(ele).parent();
if(_3a){
jQuery(ele).css("border","1px solid red");
_3b.find(_37).removeClass().addClass("judej-select");
_3b.find(_39).html(_38).css("visibility","visible").show();
}else{
jQuery(ele).css("border","1px solid #80c269");
_3b.find(_37).removeClass().addClass("judej").show();
_3b.find(_39).css("visibility","hidden");
}
}};
var SmallSitedefaultTip={"regEmail":"*\u8bf7\u8f93\u5165\u5e38\u7528\u90ae\u7bb1","regAntiCode":"*\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801","emailError":"*\u90ae\u7bb1\u5730\u5740\u4e0d\u7b26\u5408\u89c4\u8303","regPwd":"*\u8bf7\u8f93\u5165\u5bc6\u7801","pwdError":"*\u5bc6\u7801\u75316~20\u4e2a\u5b57\u7b26\u7ec4\u6210","pwdConfirmError":"*\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4","regPwdConfirm":"*\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801\u8fdb\u884c\u786e\u8ba4","name":"*\u59d3\u540d\u4e0d\u5f97\u8d85\u8fc76\u4e2a\u6c49\u5b57\u621612\u4e2a\u82f1\u6587\u5b57\u7b26","regname":"*\u8bf7\u8f93\u5165\u4f60\u7684\u540d\u5b57","chinesename":"*\u8bf7\u8f93\u5165\u771f\u5b9e\u4e2d\u6587\u540d\u5b57","regsex":"*\u8bf7\u9009\u62e9\u4f60\u662f\u7537\u751f\u3001\u8fd8\u662f\u5973\u751f\uff1f","regdate":"*\u8bf7\u9009\u62e9\u4f60\u7684\u751f\u65e5","notip":""};
var SmallSiteregister=function(){
this.clearListener();
this.init();
};
SmallSiteregister.prototype={clearListener:function(){
if(jQuery("#emailbox").val()!=""){
jQuery("#emailbox").val("");
}
if(jQuery("#realName").val()!=""){
jQuery("#realName").val("");
}
if(jQuery("#hiddentext").val()!=""){
jQuery("#hiddentext").val("");
}
},init:function(){
this.emailbox=jQuery("#emailbox");
this.passportbox=jQuery("#pwdbox");
this.passportCon=jQuery("#pwdConfrimbox");
this.realname=jQuery("#realName");
this.inputObj=jQuery(".write-in");
this.stepNext=jQuery("#nextStep");
this.stepFinish=jQuery("#complete");
this.chooseSex=jQuery("input.sex");
this.selectval=jQuery(".birthday");
this.sexSelect=jQuery("#hiddentext");
this.famleSelect=jQuery("#famle");
this.maleSelect=jQuery("#male");
this.antiCode=jQuery("#antispam");
this.events=jQuery.browser.msie?"propertychange":"input";
this.IsWriting=false;
this.bindEvent();
},bindEvent:function(){
var _3c=this;
this.inputObj.focusin(function(){
jQuery(this).parent().find(".tips").css("visibility","hidden");
jQuery(this).css("border","1px solid #00b9bd");
});
this.inputObj.bind(_3c.events,function(){
if(jQuery(this).val().length>0){
_3c.IsWriting=true;
}
});
this.inputObj.bind("blur",function(e){
var _3e=e.target||e.srcElement;
if(!_3c.IsWriting){
jQuery(_3e).parent().find(".tips").css("visibility","visible");
}
if(_3e.id==="emailbox"){
if(checkInterface.checkEmail(_3e)){
checkInterface.checkEmailAjax(_3e);
}
}
if(_3e.id==="pwdbox"){
checkInterface.checkpwd(_3e);
}
if(_3e.id=="antispam"){
checkInterface.checkAntiCode(_3e);
}
if(_3e.id==="realName"){
if(checkInterface.checkUserName(_3e)){
checkInterface.checkUserNameAjax(_3e);
}
}
});
this.stepNext.bind("click",function(){
var _3f=this;
if(_3c.checkForms()===false){
return;
}else{
_3c.CollectionForms(_3f);
}
});
this.stepFinish.bind("click",function(){
var _40=this;
var _41=document.getElementById("realName");
var _42=checkInterface.checkSex();
var _43=checkInterface.checkbirthday();
var _44=checkInterface.checkUserName(_41);
var _45=checkInterface.checkHeadpic();
var _46=(_42&&_43&&_44&&_45&&checkInterface.checkstatus);
if(_46){
_3c.CollectionForms(_40);
}
});
this.chooseSex.bind("click",function(){
var _47=jQuery("#hiddentext");
if(this.id==="famle"){
_47[0].value="\u5973\u751f";
jQuery(this).addClass("sex-select");
if(_3c.maleSelect.hasClass("sex-select")){
_3c.maleSelect.removeClass("sex-select");
}
}
if(this.id==="male"){
_47[0].value="\u7537\u751f";
jQuery(this).addClass("sex-select");
if(_3c.famleSelect.hasClass("sex-select")){
_3c.famleSelect.removeClass("sex-select");
}
}
jQuery("#sexStatus").removeClass().addClass("judej").show();
jQuery("#nosexError").css("visibility","hidden");
});
jQuery("#dd").change(function(){
jQuery("#nobirthError").css("visibility","hidden");
});
jQuery(".prompt a").click(function(_48){
_48.preventDefault();
var _49=null,_4a=this;
if(jQuery(_4a).data("notSend")!=true){
jQuery(_4a).data("notSend",true);
jQuery.ajax({url:"http://zhan.renren.com/reg/postRegData/sendEailAgain",type:"get",success:function(){
},complete:function(){
jQuery(_4a).hide();
_49=jQuery("<span style=\"color:#00B9BD\">\u5df2\u53d1\u9001</span>").insertAfter(_4a);
setTimeout(function(){
_49.remove();
jQuery(_4a).data("notSend",false);
jQuery(_4a).show();
},60000);
}});
}else{
jQuery.messageDialog({message:"\u521a\u624d\u5df2\u7ecf\u53d1\u9001\u90ae\u4ef6\u4e86\uff0c\u518d\u53bb\u90ae\u7bb1\u770b\u770b\u5427\uff01\u4e0d\u8981\u653e\u8fc7\u201c\u5783\u573e\u90ae\u4ef6\u201d\u548c\u201c\u5e7f\u544a\u90ae\u4ef6\u201d\u54e6\uff0c\u90ae\u7bb1\u6709\u65f6\u4f1a\u7b28\u7b28\u7684",width:321});
}
});
},shiderAction:function(et){
var _4c=jQuery(".content-auto1");
var _4d=jQuery(".content-auto2");
var _4e=jQuery(".content-auto3");
if(et.id==="nextStep"){
_4c.removeClass("current").addClass("past");
_4d.removeClass("futrue").addClass("current");
_4e.removeClass("far-futrue").addClass("futrue");
}else{
_4c.removeClass("past").addClass("far-past");
_4d.removeClass("current").addClass("past");
_4e.removeClass("futrue").addClass("current");
}
},checkForms:function(){
var _4f=checkInterface.checkEmail(this.emailbox);
var _50=checkInterface.checkpwd(this.passportbox);
var _51=checkInterface.checkAntiCode(this.antiCode);
var _52=(_4f&&_50&&_51);
if(_52){
return true;
}else{
return false;
}
},CollectionForms:function(e){
var _54=jQuery(e).parent().serialize();
if(e.id=="complete"){
var url="http://zhan.renren.com/reg/postRegData/userData";
}
if(e.id=="nextStep"){
var url="http://zhan.renren.com/reg/postRegData/userPassort";
}
this.sendAjaxForm(_54,e,url);
},sendAjaxForm:function(f,e,_58){
var _59=this;
var _5a=e;
jQuery.ajax({url:_58,type:"post",dataType:"json",data:f,success:function(r){
try{
if(r.code==0){
if(_5a.id=="complete"){
var _5c=r.host;
var _5d=r.email;
jQuery(".content3 p:first").html("\u5c0f\u7ad9\u5411\u4f60\u7684\u90ae\u7bb1"+_5d);
jQuery(".go-email a").attr("href","http://"+_5c+"");
if(r.type==true){
window.location.href="http://zhan.renren.com/home";
return false;
}
}
_59.shiderAction(_5a);
}else{
if(r.code==2){
jQuery("#codeError").html(r.msg).css("visibility","visible").show();
jQuery("#antispam").val("");
refreshCode();
}else{
jQuery.messageDialog({message:r.msg});
}
}
}
catch(e){
}
}});
}};
function createSwfUpload(){
var _5e="http://a.xnimg.cn/smallsite/images/home-new/register/regist-upload.png";
var _5f=new SWFUpload({button_placeholder_id:"uploadHead",flash_url:"http://s.xnimg.cn/smallsite/swfupload.swf",upload_url:"http://head2.upload.renren.com/uploadservice.fcgi?pagetype=addHeadXiaoZhan"+"&hostid="+jQuery.cookie("id")+"&t="+jQuery.cookie("t"),button_image_url:_5e,button_cursor:SWFUpload.CURSOR.HAND,button_action:SWFUpload.BUTTON_ACTION.SELECT_FILE,file_size_limit:"4 MB",button_width:"197",button_height:"47",file_types:"*.jpg;*.jpeg;*.png;*.bmp;*.gif",file_types_description:"All Image Files",button_window_mode:SWFUpload.WINDOW_MODE.TRANSPARENT,upload_start_handler:function(){
this.setUploadURL("http://head2.upload.renren.com/uploadservice.fcgi?pagetype=addHeadXiaoZhan"+"&hostid="+jQuery.cookie("id")+"&t="+jQuery.cookie("t"));
jQuery(".pecentContainer").show();
},upload_success_handler:function(_60,_61){
_61=jQuery.parseJSON(_61);
if(_61.code==1){
var _62=_61.tinyFull;
var _63=(_62.substring(0,_62.lastIndexOf("/")))+_61.main.substring(_61.main.lastIndexOf("/"));
var _64=jQuery(".mainimg");
var _65=jQuery("#headurlUpload");
var _66=jQuery("#userHead");
_64.attr("src",_63);
_66.val(_62);
jQuery("#percent-box .progress").css("width","50%");
jQuery(".pecentContainer #percentText").text("50%");
setTimeout(function(){
jQuery("#percent-box .progress").css("width","100%");
jQuery(".pecentContainer #percentText").text("100%");
},200);
_65.find("input[name=tinyUrl]").val(_61.tiny);
_65.find("input[name=mainUrl]").val(_61.main);
_65.find("input[name=headUrl]").val(_61.head);
_65.find("input[name=largeUrl]").val(_61.large);
_64.parent().show();
jQuery("#nopicError").css("visibility","hidden");
jQuery("#headStatus").removeClass().addClass("judej").show();
}else{
jQuery(".pecentContainer").hide();
jQuery("#nopicError").html("*"+_61.msg).css("visibility","visible");
jQuery("#headStatus").removeClass().addClass("judej-select");
jQuery(".headUpload img").css("visibility","hidden");
}
},file_queued_handler:function(){
this.startUpload();
},file_queue_error_handler:function(_67,_68,msg){
try{
if(_68==SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT){
jQuery(".pecentContainer").hide();
jQuery("#nopicError").html("*\u6587\u4ef6\u8fc7\u5927\uff0c\u8bf7\u4fdd\u8bc1\u6bcf\u5f20\u56fe\u7247\u57284M\u4ee5\u5185\u3002").css("visibility","visible");
jQuery("#headStatus").removeClass().addClass("judej-select");
}
}
catch(ex){
}
},upload_error_handler:function(_6a,_6b,_6c){
alert(_6b+":"+_6c);
}});
}
function refreshCode(){
var _6d=jQuery("#verifyPic");
var _6e=_6d.attr("src").split("&")[0];
_6d.attr("src",_6e+"&rnd="+Math.random());
}
jQuery(function(){
new SmallSiteregister();
createSwfUpload();
if(stat=="3"){
jQuery(".content-auto1").removeClass().addClass("content-auto1 past");
jQuery(".content-auto2").removeClass().addClass("content-auto2 current");
jQuery(".content-auto3").removeClass().addClass("content-auto3 futrue");
}
if(stat=="2"){
jQuery(".content-auto1").removeClass().addClass("content-auto1 far-past");
jQuery(".content-auto2").removeClass().addClass("content-auto2 past");
jQuery(".content-auto3").removeClass().addClass("content-auto3 current");
}
new YMDLinkage("yy","mm","dd");
});
