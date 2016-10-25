// ==UserScript==
// @name         Glue00P-Subtle
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Disable copy pate restriction in skillrack
// @author       Technophilic
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @require http://code.jquery.com/jquery-latest.js
// @match *://www.skillrack.com/*
// @match *://skillrack.com/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
    /* jshint ignore:end */
    /* jshint esnext: true */
    //==============================================
    //var a=confirm("Click ok to Enable paste");
    //if(a)
    //{
    //alert('Will disable');
    $('head').append('<title>Disabling security ...</title>');
    $("body").css("overflow","hidden");
    $("body").prepend(`
<div id="LScreen" style="opacity: 0.8; background-color: rgb(255, 255, 255); width: `+window.innerWidth+`px; height: `+window.innerHeight+`px; z-index: 2227; position: absolute; top: 0px; left: 0px;">
    <div id="content">
    <h1>Disabling Security.....</h1>
    </div>
</div>
`);
    $('#j_id_3j > script').html($('#j_id_3j > script').html().replace('diff = nlen - olen;', 'diff = 0;'));
    $('title').text("Security Disabled");
    $('LScreen').remove();
    $("body").css("overflow","visible");
    $('#j_id_5d > span').click(function(){
    $(this).text('Saved !!');
    $('title').text("#technophilic");
    });
    
    //}
    //else
    //{
    //alert('restriction not disabled');
    //}
    //==============================================
    /* jshint ignore:start */
]]></>).toString();
                  var c = babel.transform(inline_src);
eval(c.code); 
/* jshint ignore:end */
