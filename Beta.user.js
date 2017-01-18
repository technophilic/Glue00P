// ==UserScript==
// @name         Glue00P-Subtle
// @version      2.1
// @description  Disable copy pate restriction in skillrack
// @author       Technophilic
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @require http://code.jquery.com/jquery-latest.js
// @match *://www.skillrack.com/faces/candidate/codeexamcenter.xhtml*
// @match *://www.skillrack.com/faces/candidate/codetest.xhtml*
// @match *://skillrack.com/faces/candidate/codeexamcenter.xhtml*
// @match *://skillrack.com/faces/candidate/codetest.xhtml*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
    /* jshint ignore:end */
    /* jshint esnext: true */
    //========================================================================//
    //   __    __ ____   ____.__                      __  .__      __    __   //
    //  / /   / / \   \ /   /|__| ____   ____   _____/  |_|  |__   \ \   \ \  //
    // / /   / /   \   Y   / |  |/    \_/ __ \_/ __ \   __\  |  \   \ \   \ \ //
    // \ \   \ \    \     /  |  |   |  \  ___/\  ___/|  | |   Y  \  / /   / / //
    //  \_\   \_\    \___/   |__|___|  /\___  >\___  >__| |___|  / /_/   /_/  //
    //                               \/     \/     \/          \/             //
    //========================================================================//
    $('head').append('<title>Disabling security ...</title>');
    $('body').html($('body').html().replace('diff = nlen - olen;', 'diff = 0;'));
    $('title').text("Security Disabled");
    $('#LScreen').remove();
    $("body").css("overflow","visible");
    $('#j_id_5d > span').click(function(){
    $(this).text('Saved !!');
    $('title').text("#technophilic");
    });
    
    //==============================================
    /* jshint ignore:start */
]]></>).toString();
                  var c = babel.transform(inline_src);
eval(c.code); 
/* jshint ignore:end */
