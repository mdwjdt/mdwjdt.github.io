function setClassProperty (className, property) {
var displayvalue = '';
if (showit == 'Y') {
	showit = 'N';
	displayvalue = 'none';
	document.DisplayPinYin.src="showPinYin.gif";
	}
else	{
	showit = 'Y';
	displayvalue = 'block';
	document.DisplayPinYin.src="HidePinYin.gif";
	}
if (document.all) {
var lastStyleSheet = document.styleSheets[document.styleSheets.length - 1];
var selector = '.' + className;
var css = property + ': ' + displayvalue + ';';
lastStyleSheet.addRule(selector, css);
}
else if (document.getElementById) {
	var lastStyleSheet = 
	document.styleSheets[document.styleSheets.length - 1];
	var ruleText = '.' + className + ' { ' + property + ': ' + displayvalue + '}';
	lastStyleSheet.insertRule(ruleText, lastStyleSheet.cssRules.length);
}
}