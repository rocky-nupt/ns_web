//节点连接
function Connection(id) {
	  var _this=this;
	  this.node=document.getElementById('node_' + id);
	
	  this.node.onclick=function (ev) {
				//判定connecting状态，初始为false
				if(!connecting) return false;
				//判定是否为第一个节点，firSelect初始为false
				if(!firSelect) {
						//记录第一个节点id
			    	lastNId=id;
						firSelect=true;
		
				} else {
						//判定是否选择了原节点
				    if(lastNId==id) {
				    	alert('Error Node !!');
				    	return false;
			   		}
						//判定两节点是否已经存在链路
						if(aNode[id].neighbor) {
								for(i in aNode[id].neighbor) {
										if(aNode[id].neighbor[i]==aNode[lastNId].name) {
												alert('Node '+aNode[lastNId].name+' And Node '+aNode[id].name+' Have Been Connected !!');
												return false;
										}
								}
						}
						//判定结束
						//第一个节点中心坐标
						var firX = Math.ceil(aNode[lastNId].node.offsetLeft + aNode[lastNId].node.offsetWidth/2);
						var firY = Math.ceil(aNode[lastNId].node.offsetTop + aNode[lastNId].node.offsetHeight/2);
						var firP=new jsPoint(firX,firY);
						//第二个节点中心坐标
						var secX = Math.ceil(aNode[id].node.offsetLeft + aNode[id].node.offsetWidth/2);
						var secY = Math.ceil(aNode[id].node.offsetTop + aNode[id].node.offsetHeight/2);
						var secP=new jsPoint(secX,secY);
						//新建链路
						aDuplexLink[dlId]=new CreateDuplexLink(dlId,firP,secP);
			
						//节点记录链路id
				    aNode[lastNId].hasLink.push(dlId);
				    aNode[id].hasLink.push(dlId);
				    //链路记录节点名称
				    aDuplexLink[dlId].firPointName=aNode[lastNId].name;
				    aDuplexLink[dlId].secPointName=aNode[id].name;
				    dlId++;
						//节点记录邻居节点名称
						aNode[lastNId].neighbor.push(aNode[id].name);
						aNode[id].neighbor.push(aNode[lastNId].name);
						
						//恢复状态参数
						$("#btnLink").val('CreateLink');
			    	$("#txtLink").val('');
						connecting=false;
			    	firSelect=false;
				}
	  }
}
