//多个属性设置
//================================================================
//================================================================
//设置
function Set(id) {
	var _this=this;
	var menu='#menu_'+id;
	this.node=document.getElementById('node_'+id);
//================================================================
	//右键菜单
	this.node.oncontextmenu=function() {
		$(menu).show();
		$(menu).css('top',aNode[id].node.offsetTop+aNode[id].node.offsetHeight);
		$(menu).css('left',aNode[id].node.offsetLeft+aNode[id].node.offsetWidth);
		return false;
	}
	document.onclick=function() {
		for(i in aNode) {
			var menu='#menu_'+i;
			$(menu).hide();
		}
	}
//================================================================
	//Add功能
	$(menu).append('<li id="li'+id+'" style="list-style-type:none;border-bottom:1px gray dashed;">Add</li>');
	var li='#li'+id;
	$(li).click(function() {
		
		$(menu).hide();
		//cancel时,setId==lastSetId
		if(aNode[id].setId!=aNode[id].lastSetId) {
			
			aNode[id].lastSetId=aNode[id].setId;
			
			aNode[id].set[aNode[id].setId]=document.createElement('div');
			aNode[id].set[aNode[id].setId].style.width='175px';
			aNode[id].set[aNode[id].setId].style.height='100px';
			aNode[id].set[aNode[id].setId].style.background='black';
			aNode[id].set[aNode[id].setId].style.position='absolute';
			aNode[id].set[aNode[id].setId].style.zIndex=2;
			aNode[id].set[aNode[id].setId].style.display='block';
			aNode[id].set[aNode[id].setId].style.overflow='visible';
			aNode[id].set[aNode[id].setId].style.top=_this.node.offsetTop-40+'px';
			aNode[id].set[aNode[id].setId].style.left=_this.node.offsetLeft+_this.node.offsetWidth+'px';
			aNode[id].set[aNode[id].setId].id=id+'_'+aNode[id].setId;
			document.body.appendChild(aNode[id].set[aNode[id].setId]);
			
			var set='#'+aNode[id].set[aNode[id].setId].id;
			$(set).draggable({containment:"parent"});
			
			new NodeAlertSelect(id,aNode[id].setId,aNode[id].name);
			
			//初始化属性
			//App
			aNode[id].set[aNode[id].setId].App='';
			aNode[id].set[aNode[id].setId].AppFull='';
			aNode[id].set[aNode[id].setId].appPacketSize='';
			aNode[id].set[aNode[id].setId].rate='';
			//Agent
			aNode[id].set[aNode[id].setId].agent='';
			aNode[id].set[aNode[id].setId].agentPacketSize='';
			//other
			aNode[id].set[aNode[id].setId].congestionWindow='';
			aNode[id].set[aNode[id].setId].receiveFrom='';
			aNode[id].set[aNode[id].setId].agentStartTime='';
			aNode[id].set[aNode[id].setId].agentEndTime='';
			
			aNode[id].set[aNode[id].setId].setId=aNode[id].setId;
		
		} else {
			var initialInfoSelect='#initialInfo'+id+'_'+aNode[id].lastSetId;
			$(initialInfoSelect).css({display:'block'});
			aNode[id].set[aNode[id].lastSetId].style.display='block';
		}
		
	});
	
}
