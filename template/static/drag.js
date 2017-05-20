//节点拖拽
function Drag(id) {
	var _this=this;
	this.id=id;
	this.node=document.getElementById('node_' + id);
	//初始化鼠标与node左边、上边距离
	this.disX=0;
	this.disY=0;
	//节点：按下鼠标
	this.node.onmousedown=function (ev) {
		_this.fnDown(ev);
		//重画该节点链路
		if(!movingRepaint) {
			aNode[_this.id].hideLink();
		}
		//取消onmousedown其他附加功能
		return false;
	}
	this.node.onmouseup=function(ev) {
		//重画该节点链路
		if(!movingRepaint) {
			aNode[_this.id].repaintLink(aNode[_this.id].name);
		}
		//取消onmouseup其他附加功能
		return false;
	}
}

Drag.prototype.fnDown=function (ev) {
	var oEvent=ev||event;
	var _this=this;
	var nodeInfo='#nodeInfo_'+_this.id;
	//计算鼠标与该节点左边、上边距离
	this.disX=oEvent.clientX-this.node.offsetLeft;
	this.disY=oEvent.clientY-this.node.offsetTop;
	//documemt：鼠标移动
	document.onmousemove=function (ev) {
		//document：移动中重画该节点链路
		if(movingRepaint) {
			aNode[_this.id].repaintLink(aNode[_this.id].name);
		}
		//重画节点信息
		var l=0,r=0;
		for(i in aNode[_this.id].info) {
			if(aNode[_this.id].set[i].agent=='TCP'||aNode[_this.id].set[i].agent=='UDP') {
				aNode[_this.id].info[i].style.top=aNode[_this.id].node.offsetTop+(l-1)*aNode[_this.id].info[i].offsetHeight+'px';
				aNode[_this.id].info[i].style.left=aNode[_this.id].node.offsetLeft-aNode[_this.id].info[i].offsetWidth+'px';
				l++;
			}
			if(aNode[_this.id].set[i].agent=='TCPSink'||aNode[_this.id].set[i].agent=='Null') {
				aNode[_this.id].info[i].style.top=aNode[_this.id].node.offsetTop+(r-2)*aNode[_this.id].info[i].offsetHeight+'px';
				aNode[_this.id].info[i].style.left=aNode[_this.id].node.offsetLeft+aNode[_this.id].node.offsetWidth+'px';
				r++;
			}
		}
		//调用函数
		_this.fnMove(ev);
	}
    //documemt：鼠标释放
	document.onmouseup=function (ev) {
		_this.fnUp();
	}
}

Drag.prototype.fnMove=function (ev) {
	var oEvent=ev||event;
	//重画该节点
	this.node.style.left=oEvent.clientX-this.disX+'px';
	this.node.style.top=oEvent.clientY-this.disY+'px';
}

Drag.prototype.fnUp=function () {
	//取消函数事件
	document.onmousemove=null;
	document.onmouseup=null;
}
