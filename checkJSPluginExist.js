/*
 *	This code it's help you to check JS plugin function (e.g. jQuery) exist.
 *	When function not exist, the code will auto reload JS plugin from your setting.
 *	
 *	plugin_name: It's your plugin function name (e.g. jQuery). The type is string.
 *	reload_url: It's your reload plugin function URL. The type is string.
 *	
 *	Copyright 2015, opoepev (Matt, Paul.Lu, Yi-Chun Lu)
 *	Free to use and abuse under the MIT license.
 *	http://www.opensource.org/licenses/mit-license.php
 */
 
//Main code
var checkJSPluginExist = function (plugin_name, reload_url) {
	if (typeof window[plugin_name] !== "function") {
		var tag = document.createElement('script');
		tag.src = reload_url;
		var headerElementTag = document.getElementsByTagName('head')[0];
		headerElementTag.appendChild(tag);
		return false;
	}
	return true;
};
