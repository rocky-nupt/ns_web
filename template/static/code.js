//code
//================================================================
//================================================================
//code
function Code() {
	//仿真器
	this.newSimulator='set ns [new Simulator]';
	//trace文件
	this.trace='set tf [open trace.tr w]\n$ns trace-all $tf';
	//SystemExit
	this.exit=function() {
		return '$ns at '+exit+' "finish"';
	}
	//finish
	this.finish='proc finish { } {\n'
		  	   +'\tglobal ns tf\n'
			   +'\t$ns flush-trace\n'
			   +'\tclose $tf\n'
			   +'\texit 0\n'
			   +'}';
	//run
	this.run='$ns run';
	//node
	this.newNode=function(element) {
		return 'set ' + element.name + ' [$ns node]';
	}
	//node agent
	this.attachAgent=function(node,element) {
		return 'set '+node.name+element.agent+element.setId+' [new Agent/'+element.agent+']\n'
			  +'$ns attach-agent $'+node.name+' $'+node.name+element.agent+element.setId;
	}
	//connect agent
	this.connectAgent=function(node,element) {
		return '$ns connect $'+element.receiveFrom+' $'+node.name+element.agent+element.setId;
	}
	//agent start
	this.agentStart=function(node,element) {
		return '$ns at '+element.agentStartTime+' "$'+node.name+element.App+element.setId+' start"';
	}
	//agent end
	this.agentEnd=function(node,element) {
		return '$ns at '+element.agentEndTime+' "$'+node.name+element.App+element.setId+' stop"';
	}
	//App
	this.attachApp=function(node,element) {
		return 'set '+node.name+element.App+element.setId+' [new Application/'+element.AppFull+']\n'
			  +'$'+node.name+element.App+element.setId+' attach-agent $'+node.name+element.agent+element.setId;
	}
	//AppPacketSize
	this.appPacketSize=function(node,element) {
		return '$'+node.name+element.App+element.setId
			  +' set packetSize_'
			  +' '+element.appPacketSize;
	}
	//AppRate
	this.rate=function(node,element) {
		return '$'+node.name+element.App+element.setId
			  +' set rate_'
			  +' '+element.rate;
	}
	//AgentPacketSize
	this.agentPacketSize=function(node,element) {
		return '$'+node.name+element.agent+element.setId
			  +' set packetSize_'
			  +' '+element.agentPacketSize;
	}
	//双向链路代码
	this.newDuplexLink=function(element) {
		return '$ns '+element.linkType
			  +' $'+element.firPointName
		   	  +' $'+element.secPointName
			  +' '+element.bandwidth
			  +' '+element.delay
			  +' '+element.queueType
			  +'\n'
			  +'$ns queue-limit'
			  +' $'+element.firPointName
			  +' $'+element.secPointName
			  +' '+element.queueSize;
	}
}
