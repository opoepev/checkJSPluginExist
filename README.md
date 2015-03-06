# checkJSPluginExist
Help you to check JS plugin function (e.g. jQuery) exist.

**plugin_name**: It's your plugin function name (e.g. jQuery). The type is string.

**reload_url**: It's your reload plugin function URL. The type is string.

### Usage:
```javascript
checkJSPluginExist('jQuery', '/js/jquery-1.7.2.min.js');
```

It will check jQuery plugin exist status.

If jQuery plugin dosen't exist, the code will auto reload JS plugin from your setting '/js/jquery-1.7.2.min.js'

For example, we will check jQuery plugin exist.

When plugin exist run normalJS(); . If doesn't exist, it will delay 500ms then run normalJS(); .

We suggest you have to confirm the 'reload_url' setting it's available for user.

### Example code

```javascript
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

//Code depend with plugin
var normalJS = function () {
	$(function () {
		console.log('%o', 'jQuery Ok');
	});
};

//Call to check plugin exist
if (!checkJSPluginExist('jQuery', '/js/jquery-1.7.2.min.js')) {
	//Delay 500ms to run depend code
	setTimeout(function() {
		normalJS();
	}, 500);
} else {
	normalJS();
}
```
