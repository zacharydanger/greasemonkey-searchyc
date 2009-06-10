// Adding SearchYC.com functionality to news.ycombinator.com
// ==UserScript==
// @name          SearchYC
// @namespace     http://sanitycheckfail.com/
// @description   Script to add search box to news.ycombinator.com
// @include http://news.ycombinator.com/*
// ==/UserScript==

// Add jQuery (borrowed from http://joanpiedra.com/jquery/greasemonkey/)
var GM_JQ = document.createElement('script');
GM_JQ.src = 'http://jquery.com/src/jquery-latest.js';
GM_JQ.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_JQ);

// Check if jQuery's loaded
function GM_wait() {
        if(typeof unsafeWindow.jQuery == 'undefined') {
                window.setTimeout(GM_wait,100);
        } else {
                $ = unsafeWindow.jQuery;
                letsJQuery();
        }
}
GM_wait();

// All your GM code must be inside this function
function letsJQuery() {
	var $center = $("center:first");
	var $div = $(document.createElement('div'));
	$center.prepend($div);
	$div.html('<form id="searchyc_form" action="" method="get"><fieldset><input type="text" name="searchyc" id="searchyc" value="" /><input type="submit" value="searchYC" /></fieldset></form>');
	$("#searchyc_form").children('fieldset').css('border', 'none').css('display', 'inline').css('padding', '0px');


	$("#searchyc_form").submit(function() {
		var query = $("#searchyc").val();
		var url = 'http://searchyc.com/' + query;
		document.location.href = url;
		return false;
	});
}
