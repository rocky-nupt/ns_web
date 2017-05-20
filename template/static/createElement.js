//新建元素
//================================================================
//================================================================
//新建节点
function CreateNode(id) {
	var _this=this;

	this.id='node_' + id;
	this.name=$("#txtNode").val();
	this.aName.push($("#txtNode").val());
	//新建node
	this.node = document.createElement('div');  
	this.node.style.cssText = "top:32px; left:10px; width:30px; height:30px; background:red; position:absolute; z-index:2;";
	this.node.id = this.id;
	this.node.innerHTML =$("#txtNode").val();
	this.node.className='hhh';
	document.body.appendChild(this.node);
	//右键菜单
	this.menu=document.createElement('div');
	this.menu.style.cssText="width:36px;height:40px;background:white;display:none;position:absolute;z-index:2;border:1px solid black;";
	this.menu.id='menu_'+id;
	document.body.appendChild(this.menu);
	/*//出现动画
	var s = "."+this.node.className;
	$(s).animate({left:'50px',top:'100px',width:'10px',height:'10px'});
	$(s).animate({left:'100px',top:'50px',width:'15px',height:'15px'});
	$(s).animate({left:'150px',top:'80px',width:'26px',height:'26px'});
	$(s).animate({left:'200px',top:'60px',width:'30px',height:'30px'});
	//取消动画控制参数
	this.node.className='';
	*/
	this.hasLink = new Array();//node拥有的链路id
	this.neighbor = new Array();//此node的邻居node名称
	
	this.set=new Array();//设置属性
	this.setId=0;
	this.lastSetId;
	
	this.info=new Array();//node信息显示
	this.infoIdL=0;
	this.infoIdR=0;

	//赋予功能
	new Drag(id);//拖拽
    new LimitDrag(id);//拖拽限制
	new Connection(id);//连接
	new Set(id);//设置
	
}
//node名称统计
CreateNode.prototype.aName = new Array();
//隐藏node链路
CreateNode.prototype.hideLink = function() {
	if(this.hasLink.length) {
		for(i in this.hasLink) {
			var ii = this.hasLink[i];
			aDuplexLink[ii].duplexLink.drawLine(penWhite,aDuplexLink[ii].firPoint,aDuplexLink[ii].secPoint);
			document.body.removeChild(aDuplexLink[ii].info);
		}
	}
}
//重画节点链路
CreateNode.prototype.repaintLink = function(nodeName) {
	if(this.hasLink.length) {
		var xUp = Math.ceil(this.node.offsetLeft + this.node.offsetWidth/2);
		var yUp = Math.ceil(this.node.offsetTop + this.node.offsetHeight/2);
		var point = new jsPoint(xUp,yUp);
		for(i in this.hasLink) {
			var ii = this.hasLink[i];
			if(aDuplexLink[ii].firPointName==nodeName) {
				aDuplexLink[ii].firPoint=point;
			} else {
				aDuplexLink[ii].secPoint=point;
			}
			aDuplexLink[ii].duplexLink.drawLine(pen,aDuplexLink[ii].firPoint,aDuplexLink[ii].secPoint);
			aDuplexLink[ii].info.style.left=(aDuplexLink[ii].firPoint.x+aDuplexLink[ii].secPoint.x)/2 + 'px';
			aDuplexLink[ii].info.style.top=(aDuplexLink[ii].firPoint.y+aDuplexLink[ii].secPoint.y)/2 + 'px';
			document.body.appendChild(aDuplexLink[ii].info);
		}
	}
}
//================================================================
//================================================================
//================================================================
//================================================================
//新建双向链路
function CreateDuplexLink(id,firPoint,secPoint) {
	var _this=this;

	this.id=id;
	this.name=$("#txtLink").val();
	this.aName.push($("#txtLink").val());
	//双向链路两端节点坐标
	this.firPoint = firPoint;
	this.secPoint = secPoint;
	//双向链路两端节点名称
	this.firPointName;
	this.secPointName;
	//新建双向链路
	this.duplexLink = new jsGraphics();
	this.duplexLink.drawLine(pen,firPoint,secPoint);
	//双向链路信息显示
	this.info = document.createElement('div');
	this.info.id='duplexLinkInfo_'+id;
	this.info.innerHTML = $("#txtLink").val();
	this.info.style.cssText = "width:30px;height:30px;position:absolute; z-index:1;overflow:visible;white-space:nowrap";
	this.info.style.left = (firPoint.x+secPoint.x)/2 + 'px';
	this.info.style.top = (firPoint.y+secPoint.y)/2 + 'px';
	document.body.appendChild(this.info);
	//双向链路选择框
	new DuplexLinkAlertSelect(id,$("#txtLink").val());
	//code
	this.linkType='';//链路类型
	this.bandwidth='';//带宽Mb
	this.delay='';//时延
	this.queueType='';//排队类型
	this.queueSize='';//排队长度
}
//双向链路名称统计
CreateDuplexLink.prototype.aName = new Array();
//================================================================
//================================================================
//================================================================
//================================================================
