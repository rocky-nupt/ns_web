//点击
//================================================================
function clickFunction() {
//================================================================
//================================================================
//新建节点按钮
	$("#btnNode").click(function() {
		//判定字符
		if(judgeCharacter($("#txtNode").val())) return false;
	    //判定null
	    if(judgeNull($("#txtNode").val())) return false;
	    //判定名称是否重复
	    if(aNode[0] && judgeName(aNode[0], $("#txtNode").val())) return false;
	    
	    //判定结束，新建节点
		aNode[nId]=new CreateNode(nId);
		nId++;
		
		//清空输入框
		$("#txtNode").val(null);
	});
//================================================================
//================================================================
//新建双向链路按钮
	$("#btnLink").click(function(ev) {
		//判定空白符
		if(judgeCharacter($("#txtLink").val())) return false;
		//判定null
      	if(judgeNull($("#txtLink").val())) return false;
        //判定名称是否重复
		if(aDuplexLink[0] && judgeName(aDuplexLink[0], $("#txtLink").val())) return false;
        
        //未解决的BUG
    	if(firSelect) {
        	alert('Error Option !!');
        	return false;
      	}
      
		//connecting状态，初始为false
        if(connecting) {
        	$("#btnLink").val('CreateLink');
          	$("#txtLink").val('');
          	connecting=false;
        } else {
        	$("#btnLink").val('Connecting');
          	connecting=true;
        }
    });
//================================================================
//================================================================
//run按钮
	$("#run").click(function() {
		if($("#cmdArea").val()!='') {
			submitTxt();
      	} else {
      		alert('Input Command !!');
     	}
    });
//================================================================
//================================================================
//清空cmd输入框按钮
    $("#clearArea").click(function() {
    	if(!$("#cmdArea").val()) {
        	alert('Clear !!');
    	} else {
    		if(confirm('Clrea Confirm !!')) {
    			$("#cmdArea").val(null);
	    	}
   		}
    });
//================================================================
//================================================================
//移动中重画链路按钮
	$("#btnMovingRepaint").click(function() {
		if(movingRepaint) {
			movingRepaint=false;
			$("#btnMovingRepaint").val('现在不会卡了~');
		} else {
			$("#btnMovingRepaint").val('现在会卡顿 ！！');
			movingRepaint=true;
		}
	});
//================================================================
//================================================================
//生成仿真代码
	$("#generator").click(function() {
		// var code = new Code();
		// var generator = new Generator(code);
		$("#cmdArea").val('')
		var nodes = new Array()
		var links = new Array()
		for(i in aNode) {
			nodes[i] = new Array()
			for(ii in aNode[i].set) {
				nodes[i][ii] = new Array()
				nodes[i][ii].push(aNode[i].name)
				nodes[i][ii].push(aNode[i].set[ii].rate)
				nodes[i][ii].push(aNode[i].set[ii].agentStartTime)
				nodes[i][ii].push(aNode[i].set[ii].agentEndTime)
				nodes[i][ii].push(aNode[i].set[ii].setId)
				nodes[i][ii].push(aNode[i].set[ii].appPacketSize)
				nodes[i][ii].push(aNode[i].set[ii].App)
				nodes[i][ii].push(aNode[i].set[ii].AppFull)
				nodes[i][ii].push(aNode[i].set[ii].agent)
				nodes[i][ii].push(aNode[i].set[ii].agentPacketSize)
				nodes[i][ii].push(aNode[i].set[ii].congestionWindow)
				nodes[i][ii].push(aNode[i].set[ii].receiveFrom)

			}
		}
		for(i in aDuplexLink) {
			links[i] = new Array()
			links[i].push(aDuplexLink[i].linkType)
			links[i].push(aDuplexLink[i].firPointName)
			links[i].push(aDuplexLink[i].secPointName)
			links[i].push(aDuplexLink[i].bandwidth)
			links[i].push(aDuplexLink[i].delay)
			links[i].push(aDuplexLink[i].queueType)
			links[i].push(aDuplexLink[i].queueSize)
		}
		nodes_json = JSON.stringify(nodes)
		links_json = JSON.stringify(links)
		$.post('/generator',
           {'nodes': nodes_json,
		    'links': links_json,
		    'exit': exit},
           function (output) {$('#cmdArea').val(JSON.parse(output));
								}
          );

	});
	// 查看trace文件
	$("#viewTrace").click(function() {
		$.post('/trace',
				function (output) {
                   $('#traceArea').val(output)
                })



	});

}
