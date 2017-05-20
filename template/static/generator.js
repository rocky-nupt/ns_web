//代码生成器
//================================================================
//================================================================
function Generator(code) {
	var cmd = $("#cmdArea");
	cmd.val('');
	//仿真器
	cmd.append(code.newSimulator+'\n\n');
	//trace
	cmd.append(code.trace+'\n\n');
	//node
	if(!aNode[0]) return false;
	for(i in aNode) {
		cmd.append(code.newNode(aNode[i])+'\n');
	}
	cmd.append('\n');
	//duplexlink
	if(!aDuplexLink[0]) return false;
	for(i in aDuplexLink) {
		cmd.append(code.newDuplexLink(aDuplexLink[i])+'\n');
	}
	cmd.append('\n');
	//attach-agent
	for(i in aNode) {
		for(ii in aNode[i].set) {
			if(aNode[i].set[ii].agent=='') continue;
			cmd.append(code.attachAgent(aNode[i],aNode[i].set[ii])+'\n');
		}
	}
	cmd.append('\n');
	//Agent PacketSize
	for(i in aNode) {
		for(ii in aNode[i].set) {
			if(aNode[i].set[ii].agentPacketSize=='') continue;
			cmd.append(code.agentPacketSize(aNode[i],aNode[i].set[ii])+'\n');
		}
	}
	cmd.append('\n');
	//attach-App
	for(i in aNode) {
		for(ii in aNode[i].set) {
			if(aNode[i].set[ii].AppFull=='') continue;
			cmd.append(code.attachApp(aNode[i],aNode[i].set[ii])+'\n');
		}
	}
	cmd.append('\n');
	//App PacketSize
	for(i in aNode) {
		for(ii in aNode[i].set) {
			if(aNode[i].set[ii].appPacketSize=='') continue;
			cmd.append(code.appPacketSize(aNode[i],aNode[i].set[ii])+'\n');
		}
	}
	cmd.append('\n');
	//App Rate
	for(i in aNode) {
		for(ii in aNode[i].set) {
			if(aNode[i].set[ii].rate=='') continue;
			cmd.append(code.rate(aNode[i],aNode[i].set[ii])+'\n');
		}
	}
	cmd.append('\n');
	//connect-agent
	for(i in aNode) {
		for(ii in aNode[i].set) {
			if(aNode[i].set[ii].receiveFrom=='') continue;
			cmd.append(code.connectAgent(aNode[i],aNode[i].set[ii])+'\n');
		}
	}
	cmd.append('\n');
	//start
	for(i in aNode) {
		for(ii in aNode[i].set) {
			if(aNode[i].set[ii].agent!='TCP'&&aNode[i].set[ii].agent!='UDP')
				continue;
			cmd.append(code.agentStart(aNode[i],aNode[i].set[ii])+'\n');
		}
	}
	cmd.append('\n');
	//end
	for(i in aNode) {
		for(ii in aNode[i].set) {
			if(aNode[i].set[ii].agent!='TCP'&&aNode[i].set[ii].agent!='UDP') 
				continue;
			cmd.append(code.agentEnd(aNode[i],aNode[i].set[ii])+'\n');
		}
	}
	cmd.append('\n');
	//exit
	cmd.append(code.exit()+'\n\n');
	//finish
	cmd.append(code.finish+'\n\n');
	//run
	cmd.append(code.run+'\n');
}
//================================================================
//================================================================
