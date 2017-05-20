//发送
//================================================================
function submitTxt() {
	var arg = $('#cmdArea').val()
	$.post('/index', 
           {'cmd': arg}, 
           function (output) {$('#displayArea').val(output);}
          );
}
//================================================================

