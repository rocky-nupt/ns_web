//拖拽限制
function LimitDrag(id) {
	Drag.call(this, id);
}

for(var i in Drag.prototype) {
	LimitDrag.prototype[i]=Drag.prototype[i];
}

LimitDrag.prototype.fnMove=function (ev) {
	var oEvent=ev||event;

	var W=document.documentElement.clientWidth;
	var H=document.documentElement.clientHeight;
	var w=this.node.offsetWidth;
	var h=this.node.offsetHeight;
	var l=oEvent.clientX-this.disX;
	var t=oEvent.clientY-this.disY;

	if(l<0) {
		l=0;
	} else if(l>(W-w)) {
		l=W-w;
	}

	if(t<31) {
		t=31;
	} else if(t>(H-h)) {
		t=H-h;
	}

	this.node.style.left=l+'px';
	this.node.style.top=t+'px';
}
