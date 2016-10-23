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
    $('#j_id_3j > script').html($('#j_id_3j > script').html().replace('diff = nlen - olen;', 'diff = 0;'));
    $('title').text("Security Disabled");
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
