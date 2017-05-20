//弹出选择框
//================================================================
//================================================================
//node选择框
function NodeAlertSelect(nodeId,setId,originalName) {
	var id=nodeId+'_'+setId;
	var setting=aNode[nodeId].set[setId];
	var set='#'+id;
	var original=originalName;
//================================================================
//================================================================	
	//初始参数配置：NodeName Agent
	var initialInfo=document.createElement('div');
	initialInfo.style.width='175px';
	initialInfo.style.height='100px';
	initialInfo.style.background='yellow';
	initialInfo.style.position='static';
	initialInfo.style.zIndex=2;
	initialInfo.style.display='block';
	initialInfo.id='initialInfo'+id;
	$(set).append(initialInfo);
	//选择框内容
	var initialInfoSelect='#'+initialInfo.id;
	$(initialInfoSelect).append(
		//NodeName
		'<dd>NodeName</dd>'
	   +'<input id="nodeName'+id+'" type="text" value="'+original+'" onclick="select()"/>'
	    //Agent
	   +'<dd>Agent</dd>'
	   +'<select id="selectAgent'+id+'">'
	   +'<option value="selectAgent">SelectAgent</option>'
	   +'<option value="TCP">TCP</option>'
	   +'<option value="UDP">UDP</option>'
	   +'<option value="TCPSink">TCPSink</option>'
	   +'<option value="Null">Null</option>'
	   +'<option value="">NoAgent</option>'
	   +'</select>'
	);
	//定义jquery参数
	var nodeName='#nodeName'+id;
	var selectAgent='#selectAgent'+id;
	var selectAgentSelected='#selectAgent'+id+' option:selected';
	$(nodeName).css({width:'120px'});
//================================================================
//================================================================	
	//接收参数配置：ReceiveFrom
	var receiveFromInfo=document.createElement('div');
	receiveFromInfo.style.width='175px';
	receiveFromInfo.style.height='50px';
	receiveFromInfo.style.background='yellow';
	receiveFromInfo.style.position='static';
	receiveFromInfo.style.zIndex=2;
	receiveFromInfo.style.display='none';
	receiveFromInfo.id='receiveFromInfo'+id;
	$(set).append(receiveFromInfo);
	//选择框内容
	var receiveFromInfoSelect='#'+receiveFromInfo.id;
	$(receiveFromInfoSelect).append(
	    //ReceiveFrom
	    '<dd>ReceiveFrom</dd>'
	   +'<select id="selectReceiveFrom'+id+'">'
	   +'<option value="selectReceiveFrom">SelectReceiveFrom</option>'
	   +'</select>'
	);
	//定义jquery参数
	var selectReceiveFrom='#selectReceiveFrom'+id;
	var selectReceiveFromSelected='#selectReceiveFrom'+id+' option:selected';
//================================================================
//================================================================
	//其他参数配置：AgentPacketSize App AppPacketSize StartTime StopTime
	var otherInfo=document.createElement('div');
	otherInfo.style.width='175px';
	otherInfo.style.height='275px';
	otherInfo.style.background='yellow';
	otherInfo.style.position='static';
	otherInfo.style.zIndex=2;
	otherInfo.style.display='none';
	otherInfo.id='otherInfo'+id;
	$(set).append(otherInfo);
	//选择框内容
	var otherInfoSelect='#'+otherInfo.id;
	$(otherInfoSelect).append(
		//AgentPacketSize
	    '<dd>AgentPacketSize</dd>'
	   +'<input id="agentPacketSize'+id+'" type="text" value="AgentPacketSize" onclick="select()"/>'
	   +'<select id="unitAgentPacketSize'+id+'">'
	   +'<option value="B">B</option>'
	   +'</select>'
		//App
	   +'<dd>App</dd>'
	   +'<select id="selectApp'+id+'">'
	   +'<option value="selectApp">SelectApp</option>'
	   +'<option value="FTP">FTP</option>'
	   +'<option value="Traffic/CBR">CBR</option>'
	   +'</select>'
	    //AppPacketSize
	   +'<dd>AppPacketSize</dd>'
	   +'<input id="appPacketSize'+id+'" type="text" value="AppPacketSize" onclick="select()"/>'
	   +'<select id="unitAppPacketSize'+id+'">'
	   +'<option value="B">B</option>'
	   +'</select>'
	    //Rate
	   +'<dd>Rate</dd>'
	   +'<input id="rate'+id+'" type="text" value="Rate" onclick="select()"/>'
	   +'<select id="unitRate'+id+'">'
	   +'<option value="Mb">Mb</option>'
	   +'</select>'
	    //AgentStartTime
	   +'<dd>StartTime</dd>'
	   +'<input id="agentStartTime'+id+'" type="text" value="StartTime" onclick="select()"/>'
	   +'<select id="unitStartTime'+id+'">'
	   +'<option value="ms">ms</option>'
	   +'</select>'
	   	//AgentEndTime
	   +'<dd>StopTime</dd>'
	   +'<input id="agentEndTime'+id+'" type="text" value="StopTime" onclick="select()"/>'
	   +'<select id="unitEndTime'+id+'">'
	   +'<option value="ms">ms</option>'
	   +'</select>'
	    //SystemExitTime
	   +'<dd>SystemExitTime</dd>'
	   +'<input id="systemExitTime'+id+'" type="text" value="systemExitTime" onclick="select()"/>'
	   +'<select id="unitSystemExitTime'+id+'">'
	   +'<option value="ms">ms</option>'
	   +'</select>'
	);
	//定义jquery参数
	var agentPacketSize='#agentPacketSize'+id;
	var selectApp='#selectApp'+id+' option:selected';
	var appPacketSize='#appPacketSize'+id;
	var rate='#rate'+id;
	var unitRate='#unitRate'+id+' option:selected';
	var agentStartTime='#agentStartTime'+id;
	var agentEndTime='#agentEndTime'+id;
	var systemExitTime='#systemExitTime'+id;
	$(agentPacketSize).css({width:'120px'});
	$(appPacketSize).css({width:'120px'});
	$(rate).css({width:'120px'});
	$(agentStartTime).css({width:'120px'});
	$(agentEndTime).css({width:'120px'});
	$(systemExitTime).css({width:'120px'});
//================================================================
//================================================================	
	//拥塞窗口参数配置：CongestionWindow
	var congestionWindowInfo=document.createElement('div');
	congestionWindowInfo.style.width='175px';
	congestionWindowInfo.style.height='40px';
	congestionWindowInfo.style.background='yellow';
	congestionWindowInfo.style.position='static';
	congestionWindowInfo.style.zIndex=2;
	congestionWindowInfo.style.display='none';
	congestionWindowInfo.id='congestionWindowInfo'+id;
	$(set).append(congestionWindowInfo);
	//选择框内容
	var congestionWindowInfoSelect='#'+congestionWindowInfo.id;
	$(congestionWindowInfoSelect).append(
	    //CongestionWindow
	    '<dd>CongestionWindow</dd>'
	   +'<input id="congestionWindow'+id+'" type="text" value="CongestionWindow" onclick="select()"/>'
	);
	//定义jquery参数
	var congestionWindow='#congestionWindow'+id;
	$(congestionWindow).css({width:'120px'});
//================================================================
//================================================================	
	//OK_Cancel
	var OK_Cancel=document.createElement('div');
	OK_Cancel.style.width='175px';
	OK_Cancel.style.height='40px';
	OK_Cancel.style.background='yellow';
	OK_Cancel.style.position='static';
	OK_Cancel.style.zIndex=2;
	OK_Cancel.style.display='block';
	OK_Cancel.id='OK_Cancel'+id;
	$(set).append(OK_Cancel);
	//选择框内容
	var OK_CancelSelect='#'+OK_Cancel.id;
	$(OK_CancelSelect).append(
	    //Delete
	    '<input id="initialInfoDelete'+id+'" type="button" value="Delete" />'
	   	//cancel
	   +'<input id="initialInfoCancel'+id+'" type="button" value="Cancel" />'
	    //OK
	   +'<input id="initialInfoOK'+id+'" type="button" value="OK" />'
	);
	//定义jquery参数
	var initialInfoOK='#initialInfoOK'+id;
	var initialInfoCancel='#initialInfoCancel'+id;
	var initialInfoDelete='#initialInfoDelete'+id;
	$(initialInfoOK).css({position:'relative',top:'10px',left:'5px'});
	$(initialInfoCancel).css({position:'relative',top:'10px',left:'3px'});
	$(initialInfoDelete).css({position:'relative',top:'10px',left:'1px'});
//================================================================
//================================================================
	//刷新InitialInfo
	function showInitialInfo() {
		$(initialInfoSelect).css({display:'block'});
		$(receiveFromInfoSelect).css({display:'none'});
		$(otherInfoSelect).css({display:'none'});
		$(congestionWindowInfoSelect).css({display:'none'});
		$(OK_CancelSelect).css({display:'block'});
	}
	//刷新receiveFromInfo
	function showReceiveFromInfo() {
		$(receiveFromInfoSelect).css({display:'block'});
		$(otherInfoSelect).css({display:'none'});
		$(congestionWindowInfoSelect).css({display:'none'});
	}
	//刷新OtherInfo
	function showOtherInfo() {
		$(receiveFromInfoSelect).css({display:'none'});
		$(otherInfoSelect).css({display:'block'});
		$(congestionWindowInfoSelect).css({display:'none'});
	}
	//刷新CongestionWindowInfo
	function showCongestionWindowInfo() {
		$(congestionWindowInfoSelect).css({display:'block'});
	}
	//全部隐藏
	function hideAll() {
		$(initialInfoSelect).css({display:'none'});
		$(receiveFromInfoSelect).css({display:'none'});
		$(otherInfoSelect).css({display:'none'});
		$(congestionWindowInfoSelect).css({display:'none'});
		$(OK_CancelSelect).css({display:'none'});
	}
	//刷新ReceiveFrom下拉选择框
	function refreshReceiveFromSelect() {
		$(selectReceiveFrom).empty();
		$(selectReceiveFrom).append('<option value="selectReceiveFrom">SelectReceiveFrom</option>');
		for(i in aNode) {
			for(ii in aNode[i].set) {
				if(aNode[i].set[ii].agent=='TCP'||aNode[i].set[ii].agent=='UDP') {
					$(selectReceiveFrom).append('<option value="'+aNode[i].name+aNode[i].set[ii].agent+aNode[i].set[ii].setId+'">'+aNode[i].name+aNode[i].set[ii].agent+aNode[i].set[ii].setId+'</option>')
				}
			}
		}
		$(selectReceiveFrom).append('<option value="">NoReceiveFrom</option>');
	}
	//刷新节点显示信息
	function newNodeInfo(nodeId,setId) {
		if(!aNode[nodeId].info[setId]) {
			//不存在则新建
			aNode[nodeId].info[setId]=document.createElement('div');
			aNode[nodeId].info[setId].id='nodeInfo_'+nodeId+'_'+setId;
			aNode[nodeId].info[setId].style.cssText = "background:white;width:55px;height:40px;position:absolute;display:block;";
			var nodeInfo='#'+aNode[nodeId].info[setId].id;
			document.body.appendChild(aNode[nodeId].info[setId]);
			//双击回显重设
			aNode[nodeId].info[setId].ondblclick=function() {
				$(set).css({display:'block'});
				new showInitialInfo();
				if($(selectAgentSelected).val()=='TCPSink'||$(selectAgentSelected).val()=='Null') {
					new refreshReceiveFromSelect();
					new showReceiveFromInfo();
					$(selectReceiveFrom).val(aNode[nodeId].set[setId].receiveFrom);
				}
				if($(selectAgentSelected).val()=='TCP') {
					new showOtherInfo();
					new showCongestionWindowInfo();
				}
				if($(selectAgentSelected).val()=='UDP') {
					new showOtherInfo();
				}
				aNode[nodeId].set[setId].style.top=aNode[nodeId].node.offsetTop-40+'px';
				aNode[nodeId].set[setId].style.left=aNode[nodeId].node.offsetLeft+aNode[nodeId].node.offsetWidth+'px';
			}
		}
		//重画
		var l=0,r=0;
		for(i in aNode[nodeId].info) {
			if(aNode[nodeId].set[i].agent=='TCP'||aNode[nodeId].set[i].agent=='UDP') {
				aNode[nodeId].info[i].style.height='40px';
				aNode[nodeId].info[i].style.top=aNode[nodeId].node.offsetTop+(l-1)*aNode[nodeId].info[i].offsetHeight+'px';
				aNode[nodeId].info[i].style.left=aNode[nodeId].node.offsetLeft-aNode[nodeId].info[i].offsetWidth+'px';
				l++;
			}
			if(aNode[nodeId].set[i].agent=='TCPSink'||aNode[nodeId].set[i].agent=='Null') {
				aNode[nodeId].info[i].style.height='20px';
				aNode[nodeId].info[i].style.top=aNode[nodeId].node.offsetTop+(r-2)*aNode[nodeId].info[i].offsetHeight+'px';
				aNode[nodeId].info[i].style.left=aNode[nodeId].node.offsetLeft+aNode[nodeId].node.offsetWidth+'px';
				r++;
			}
		}
		//刷新显示
		for(i in aNode[nodeId].info) {
			var setting=aNode[nodeId].set[i];
			var nodeInfo='#'+aNode[nodeId].info[i].id;
			$(nodeInfo).empty();
			if(setting.AppFull!='') {
				$(nodeInfo).append('<li style="list-style-type:none">'+aNode[nodeId].name+setting.App+i+'</li>');
			}
			if(setting.agent!='') {
				$(nodeInfo).append('<li style="list-style-type:none">'+aNode[nodeId].name+setting.agent+i+'</li>');
			}
		}
 	}
	//刷新节点持有信息
	function emptyNode_1() {
		setting.App='';
		setting.AppFull='';
		setting.appPacketSize='';
		setting.agentPacketSize='';
		setting.rate='';
		setting.agentStartTime='';
		setting.agentEndTime='';
		setting.congestionWindow='';
	}
	function emptyNode_2() {
		setting.receiveFrom='';
	}
	//更新链路节点名称
	function refreshLink_Node(nodeId,original_Name,update_Name) {
		for(i in aNode[nodeId].hasLink) {
	    	if(aDuplexLink[aNode[nodeId].hasLink[i]].firPointName==original_Name) {
	    		aDuplexLink[aNode[nodeId].hasLink[i]].firPointName=update_Name;
	    	} else {
	    		aDuplexLink[aNode[nodeId].hasLink[i]].secPointName=update_Name;
	    	}
	    }
	}
	//更新邻居节点名称
	function refreshNeighbor(nodeId,original_Name,update_Name) {
		for(i in aNode[nodeId].neighbor) {
	    	for(ii in aNode) {
	    		if(aNode[ii].name==aNode[nodeId].neighbor[i]) {
	    			for(iii in aNode[ii].neighbor) {
	    				if(aNode[ii].neighbor[iii]==original_Name) {
	    					aNode[ii].neighbor[iii]=update_Name;
	    				}
	    			}
	    		}
	    	}
	    }
	}
	//刷新ReceiveFrom值
	function refreshReceiveFromValue(nodeId,setId,original_Name,update_Name) {
		for(i in aNode) {
			for(ii in aNode[i].set) {
				var s=original_Name+aNode[nodeId].set[setId].agent+setId;
				if(aNode[i].set[ii].receiveFrom==s) {
					var ss=update_Name+aNode[nodeId].set[setId].agent+setId;
					aNode[i].set[ii].receiveFrom=ss;
				}
			}
		}
	}
//================================================================
//================================================================
	//Cancel
	$(initialInfoCancel).click(function() {
		$(set).css({display:'none'});
	});
	//选择不同Agent
	$(selectAgent).change(function() {
		if($(selectAgentSelected).val()=='TCPSink'||$(selectAgentSelected).val()=='Null') {
			new refreshReceiveFromSelect();
			new showReceiveFromInfo();
		} else if($(selectAgentSelected).val()=='TCP') {
			new showOtherInfo();
			new showCongestionWindowInfo();
		} else if($(selectAgentSelected).val()=='UDP') {
			new showOtherInfo();
		} else {
			new showInitialInfo();
		}
	})
//================================================================
//================================================================
	//initialInfoOK
	$(initialInfoOK).click(function() {
//================================================================
		//rename
		if($(nodeName).val()!=originalName) {
			//判定字符
			if(judgeCharacter($(nodeName).val())) return false;
		    //判定null
		    if(judgeNull($(nodeName).val())) return false;
		    //判定名称是否重复
		    aNode[0].aName[nodeId]='';
		    if(judgeName(aNode[0], $(nodeName).val())) {
		    	aNode[0].aName[nodeId]=aNode[nodeId].name;
		    	return false;
		    } 
		    //更新链路节点名称
		    new refreshLink_Node(nodeId,original,$(nodeName).val());
		    //更新邻居节点名称
		    new refreshNeighbor(nodeId,original,$(nodeName).val());
		    //刷新其他node的ReceiveFromValue
		    new refreshReceiveFromValue(nodeId,setId,original,$(nodeName).val());
		    //更新原名参数
		    original=$(nodeName).val();
		    //更新节点名称
		    aNode[nodeId].node.innerHTML=$(nodeName).val();
		    aNode[nodeId].name=$(nodeName).val();
		    aNode[0].aName[nodeId]=$(nodeName).val();
		}
//================================================================
		//设置Agent
		if($(selectAgentSelected).val()=='') {
			$(set).css({display:'none'});
			return false;
		}
		if($(selectAgentSelected).val()=='selectAgent') {
			alert('Warning: Select Agent !!');
			return false;
		}
		setting.agent=$(selectAgentSelected).val();
//================================================================
		//设置ReceiveFrom:TCPSink Null
		if(setting.agent=='TCPSink'||setting.agent=='Null') {
			if($(selectReceiveFromSelected).val()=='selectReceiveFrom') {
				alert('Warning: Select ReceiveFrom !!');
				return false;
			}
			setting.receiveFrom=$(selectReceiveFromSelected).val();
			//清空其他信息
			new emptyNode_1();
			new hideAll();
		} 
//================================================================
		//设置APP AppPacketSize Time：TCP UDP
		if(setting.agent=='TCP'||setting.agent=='UDP') {
//================================================================
			//App
			if($(selectApp).val()=='selectApp') {
				alert('Warning: Select App !!');
				return false;
			}
			setting.App=$(selectApp).text();
			setting.AppFull=$(selectApp).val();
//================================================================
			//设置节点AgentPacketSize
			if(judgeInteger($(agentPacketSize).val())) {
					$(agentPacketSize).select();
					return false;
			}
			setting.agentPacketSize=$(agentPacketSize).val();
//================================================================
			//设置节点AppPacketSize
			if(judgeInteger($(appPacketSize).val())) {
					$(appPacketSize).select();
					return false;
			}
			setting.appPacketSize=$(appPacketSize).val();
//================================================================
			//设置Rate
			if(judgeNumber(Number($(rate).val()))) {
					$(rate).select();
					return false;
			}
			setting.rate=$(rate).val()+$(unitRate).val();
//================================================================
			//设置节点time
			//判定数字
			if(judgeNumber(Number($(agentStartTime).val()))||judgeNull($(agentStartTime).val())) {
				$(agentStartTime).select();
				return false;
			}
			if(judgeNumber(Number($(agentEndTime).val()))||judgeNull($(agentEndTime).val())) {
				$(agentEndTime).select();
				return false;
			}
			//判定通过
			setting.agentStartTime=Number($(agentStartTime).val());
			setting.agentEndTime=Number($(agentEndTime).val());
//================================================================	
			//设置exit
			if(judgeNumber(Number($(systemExitTime).val()))||judgeNull($(systemExitTime).val())) {
				$(systemExitTime).select();
				return false;
			}
			for(i in aNode) {
				for(ii in aNode[i].set) {
					if(aNode[i].set[ii].agentEndTime>Number($(systemExitTime).val())) {
						alert('Error Exit Time !!');
						$(systemExitTime).select();
						return false;
					}
				}
			}
			exit=Number($(systemExitTime).val());
//================================================================	
			//清空其他信息
			new emptyNode_2();
			setting.congestionWindow='';
		}
//================================================================
		//补充设置CongestionWindow：TCP
		if(setting.agent=='TCP') {
			if(judgeInteger($(congestionWindow).val())||judgeNull($(congestionWindow).val())) {
				$(congestionWindow).select();
				return false;
			}
			setting.congestionWindow=$(congestionWindow).val();
		}
//================================================================
		//隐藏选择框
		$(set).css({display:'none'});
//================================================================
		//新增节点显示信息
		new newNodeInfo(nodeId,setId);
		//id++
		aNode[nodeId].setId++;
	});
//================================================================
//================================================================
	//initialInfoDelete
	$(initialInfoDelete).click(function() {
		//判断有无node info
		if(!aNode[nodeId].info[setId]) return false;
		//确认Delete
		if(confirm('Delete Confirm !!')) {
			//清空
			document.body.removeChild(aNode[nodeId].info[setId]);
			$(set).css({display:'none'});
			//App
			aNode[nodeId].set[setId].App='';
			aNode[nodeId].set[setId].AppFull='';
			aNode[nodeId].set[setId].appPacketSize='';
			aNode[nodeId].set[setId].rate='';
			//Agent
			aNode[nodeId].set[setId].agent='';
			aNode[nodeId].set[setId].agentPacketSize='';
			//other
			aNode[nodeId].set[setId].congestionWindow='';
			aNode[nodeId].set[setId].receiveFrom='';
			aNode[nodeId].set[setId].agentStartTime='';
			aNode[nodeId].set[setId].agentEndTime='';
		}
	});
}
//================================================================
//================================================================
//================================================================
//================================================================
//双向链路选择框
function DuplexLinkAlertSelect(id,originalName) {
	var original=originalName;
	//选择框参数
	var div=document.createElement('div');
	div.style.width='200px';
	div.style.height='240px';
	div.style.background='yellow';
	div.style.position='absolute';
	div.style.zIndex=2;
	div.style.display='none';
	div.id='dLinkalertSelect'+id;
	document.body.appendChild(div);
	//选择框内容
	var dLinkalertSelect='#'+div.id;
	$(dLinkalertSelect).append(
		//LinkName
		'<dd>LinkName</dd>'
	   +'<input id="linkName'+id+'" type="text" value="'+original+'" onclick="select()"/>'
	   	//LinkType
	   +'<dd>LinkType</dd>'
	   +'</select>'
	   +'<select id="selectLinkType'+id+'">'
	   +'<option value="duplex-link">duplex-link</option>'
	   +'<option value="simplex-link">simplex-link</option>'
	   +'</select>'
	   	//BandWidth
	   +'<dd>BandWidth</dd>'
	   +'<input id="bandWidth'+id+'" type="text" value="BandWidth" onclick="select()"/>'
	   +'</select>'
	   +'<select id="unitBandWidth'+id+'">'
	   +'<option value="Mb">Mb</option>'
	   +'<option value="Kb">Kb</option>'
	   +'</select>'
	   	//Delay
	   +'<dd>Delay</dd>'
	   +'<input id="delay'+id+'" type="text" value="Delay" onclick="select()"/>'
	   +'</select>'
	   +'<select id="unitDelay'+id+'">'
	   +'<option value="ms">ms</option>'
	   +'</select>'
	   	//QueueType
	   +'<dd>QueueType</dd>'
	   +'</select>'
	   +'<select id="selectQueueType'+id+'">'
	   +'<option value="selectQueueType">SelectQueueType</option>'
	   +'<option value="DropTail">DropTail</option>'
	   +'<option value="RED">RED</option>'
	   +'</select>'
	   	//QueueSize
	   +'<dd>QueueSize</dd>'
	   +'<input id="queueSize'+id+'" type="text" value="QueueSize" onclick="select()"/>'
	   +'<input id="dLinkselectOK'+id+'" type="button" value="OK" />'
	 );
	//定义jquery参数
	var linkName='#linkName'+id;
	var selectLinkType='#selectLinkType'+id+' option:selected';
	var bandWidth='#bandWidth'+id;
	var unitBandWidth='#unitBandWidth'+id+' option:selected';
	var delay='#delay'+id;
	var unitDelay='#unitDelay'+id+' option:selected';
	var selectQueueType='#selectQueueType'+id+' option:selected';
	var queueSize='#queueSize'+id;
	var dLinkselectOK='#dLinkselectOK'+id;
	$(dLinkselectOK).css({position:'absolute',top:'213px',left:'155px'});
//================================================================
//================================================================
	//双击弹出选择框
	var duplexLinkInfo = '#duplexLinkInfo_'+id;
	$(duplexLinkInfo).dblclick(function() {
		//重设弹出位置
		$(dLinkalertSelect).css('top',$(duplexLinkInfo).offset().top-$(dLinkalertSelect).height()/2);
		$(dLinkalertSelect).css('left',$(duplexLinkInfo).offset().left+10);
		$(dLinkalertSelect).show();
	});
//================================================================
//================================================================
	//OK
	$(dLinkselectOK).click(function() {
//================================================================
		//设置Link名称
		//判定字符
		if(judgeCharacter($(linkName).val())) return false;
	    //判定null
	    if(judgeNull($(linkName).val())) return false;
	    //判定名称是否重复
	    aDuplexLink[0].aName[id]='';
	    if(judgeName(aDuplexLink[0], $(linkName).val())) {
	    	aDuplexLink[0].aName[id]=aDuplexLink[id].name;
	    	return false;
	    } 
	    //更新原名参数
	    original=$(linkName).val();
	    //更新节点名称
	    aDuplexLink[id].name=$(linkName).val();
	    aDuplexLink[0].aName[id]=$(linkName).val();
//================================================================
		//设置LinkType
		aDuplexLink[id].linkType=$(selectLinkType).val();
//================================================================
		//设置BandWidth
		if(judgeNumber(Number($(bandWidth).val()))||judgeNull($(bandWidth).val())) {
			$(bandWidth).select();
			return false;
		}
		aDuplexLink[id].bandwidth=Number($(bandWidth).val())+$(unitBandWidth).val();
//================================================================
		//设置链路Delay
		if(judgeNumber(Number($(delay).val()))||judgeNull($(delay).val())) {
			$(delay).select();
			return false;
		}
		aDuplexLink[id].delay=Number($(delay).val())+$(unitDelay).val();
//================================================================
		//设置链路QueueType
		if($(selectQueueType).val()=='selectQueueType') {
			alert('Warning: Select Queue Type !!');
			return false;
		}
		aDuplexLink[id].queueType=$(selectQueueType).val();
//================================================================
		//设置链路QueueSize
		if(judgeInteger($(queueSize).val())||judgeNull($(queueSize).val())) {
			$(queueSize).select();
			return false;
		}
		aDuplexLink[id].queueSize=$(queueSize).val();
//================================================================
		//最后隐藏选择框
		$(dLinkalertSelect).hide();
		//更新双向链路显示信息
		$(duplexLinkInfo).html(
		   ' '
		   +aDuplexLink[id].name
		   +' = [ '+aDuplexLink[id].bandwidth
		   +' '+aDuplexLink[id].delay
		   +' '+aDuplexLink[id].queueType
		   +' ]'
		);
//================================================================
	});
}


