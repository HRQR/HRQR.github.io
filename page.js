document.getElementById("body").innerHTML =   '<link rel="stylesheet" type="text/css" href="css/site_global.css?3848068315"/>'+
    ' <link rel="stylesheet" type="text/css" href="css/index.css?290881740" id="pagesheet"/>'+
    ' <div class="clearfix" id="page"><!-- column -->' +
    ' <div class="position_content" id="page_position_content">' +
    '<div class="clearfix colelem" id="pu133-8"><!-- group -->'+
'<div class="clearfix grpelem" id="u133-8"><!-- content -->'+
'   <p> &nbsp; &nbsp; &nbsp;</p>'+
    '<p><a title="HRQR" class="nonblock" href="' +
    "javascript:(function()%7Blocation.href='http://hrqr.org?'+location.href;%7D)();" +
    '"><span class="Character-Style" id="u133-4">HRQRify Bookmarklet</span></a></p>'+
    '</div>'+
'<a title="HRQR" class="nonblock nontext grpelem" id="u137" href="' +
    "javascript:(function()%7Blocation.href='http://hrqr.org?'+location.href;%7D)();" +
    '"><!-- svg --><img class="svg" src="images/book.svg" width="18" height="50" alt="" data-mu-svgfallback="images/book.png"/></a>'+
    '</div>'+
    '   <div class="clearfix colelem" id="pu77"><!-- group -->'+
    '    <div class="clip_frame grpelem" id="u77"><!-- image -->'+
    '     <img class="block" id="u77_img" src="images/logo.svg" alt="" width="167" height="78"/>'+
    '    </div>'+
    '    <div class="clearfix grpelem" id="u83-4"><!-- content -->'+
    '     <p>Human Readable Quick Response Code</p>'+
    '    </div>'+


    '    <a class="nonblock nontext clip_frame grpelem" id="u101" href="https://itunes.apple.com/us/app/hrqr/id1020790145" style="display:inline-block;overflow:hidden;background:url(http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg) no-repeat;width:480px;height:44px;"><!-- image -->'+
    //'    <img class="block" id="u101_img" src="http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg alt="" width="168" height="58"/>
    '</a>'+
    '   </div>'+
    '   <div class="clearfix colelem" id="pu84"><!-- group -->'+
    '    <a class="nonblock nontext clip_frame grpelem" id="u84" href="http://media.mit.edu"><!-- image --><img class="block" id="u84_img" src="images/ml.svg" alt="" width="33" height="33"/></a>'+
    '    <div class="clearfix grpelem" id="u90-5"><!-- content -->'+
    '     <p><a class="nonblock" href="http://media.mit.edu"><span id="u90">MIT Media Lab</span></a></p>'+
    '    </div>'+
    '    <a class="nonblock nontext clip_frame grpelem" id="u91" href="http://fluid.media.mit.edu"><!-- image --><img class="block" id="u91_img" src="images/fl.svg" alt="" width="32" height="32"/></a>'+
    '    <div class="clearfix grpelem" id="u98-5"><!-- content -->'+
    '     <p><a class="nonblock" href="http://fluid.media.mit.edu"><span id="u98">Fluid Interfaces Group</span></a></p>'+
    '    </div>'+
    '    <div class="clearfix grpelem" id="u100-5"><!-- content -->'+
    '     <p><a class="nonblock" href="http://www.valentinheun.com"><span class="Character-Style">Created By Valentin Heun</span></a></p>'+
    '    </div>'+
    '    <a class="nonblock nontext clip_frame grpelem" id="u119" href="https://github.com/hrqr/hrqr.github.io/"><!-- image -->'+
    '     <img class="block" id="u119_img" src="images/github.png" alt="" width="100" height="37"/></a>'+
    '   </div>'+
    '   <div class="clearfix colelem" id="pu75"><!-- group -->'+
    '    <div class="clearfix grpelem" id="u75"><!-- group -->'+
    '     <div class="grpelem" id="u108"><!-- custom html -->'+
    '      <div id="svgDiv"></div>'+
    '</div>'+
    '    </div>'+
    '    <div class="grpelem" id="u114"><!-- custom html -->'+
    '     <style>'+
    'textarea{'+
    'border:1px solid #C9C9C9;'+
    'background-color:#FFFFFF;'+
    'width:435px;'+
    'height:50px;'+
    '}'+
    '</style>'+
    '<textarea  id="textContent" rows="3" cols="70" maxlength="250" border="1" style="border:1" placeholder="Type your message here to generate the HRQR Code...." oninput="onInputText()"></textarea>'+
    '</div>'+
    '    <div class="clearfix grpelem" id="u117-6"><!-- content -->'+
    '     <p>Use the <a href="https://itunes.apple.com/us/app/hrqr/id1020790145"  style= "text-decoration: underline;"><b>iOS-App</b></a> or this <a href="/abc"  style= "text-decoration: underline;"><b>Alphabet</b></a> to read your codes.<br> The iOS App will handle messages starting with &quot;http://&quot; as links.</p>'+
    '     <p></p>'+
    '    </div>'+
    '   </div>'+
    '   <div class="colelem" id="u76"><!-- simple frame --></div>'+
    '   <div class="verticalspacer"></div>'+
    '  </div>'+
    '  </div>';



drawHRQR("svgDiv","");

window.addEventListener('resize', function () {

    drawHRQR("svgDiv",document.getElementById("textContent").value);


});