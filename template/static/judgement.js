//判定
//================================================================
//================================================================
//判定名称是否重复
function judgeName(inputElement, inputName) {
	for(i in inputElement.aName) {
		if(inputElement.aName[i]==inputName) {
			alert('Warning: Name ' + inputName +' Already Exists !!');
	    	return true;
	  	}
	}
}
// ================================================================
//================================================================
//判定英文字母下划线
function judgeCharacter(inputString) {
	var re = /\W/;//非英文字母下划线
	if(re.test(inputString)) {
		alert('Warning: [0 9] [a z] [A Z] [ _ ] !!');
		return true;
	}
}
//================================================================
//================================================================
//判定null
function judgeNull(inputString) {
	if(inputString=='') {
		alert('Warning: Null !!')
		return true;
	}
}
//================================================================
//================================================================
//判定数字
function judgeNumber(inputNumber) {
	if(isNaN(inputNumber)) {
		alert('Warning: Not A Number !!');
		return true;
	}
}
//================================================================
//================================================================
//判定整数
function judgeInteger(inputNumber) {
	var re=/\D/;
	if(re.test(inputNumber)) {
		alert('Warning: Not Integer !!');
		return true;
	}
}
//================================================================
//================================================================