#!/usr/bin/env python
# -*- coding:utf-8 -*-

class Code():
    def __init__(self, exit):
        self.newSimulator = 'set ns [new Simulator]\n\n'
        self.trace = 'set tf [open trace.tr w]\n$ns trace-all $tf\n\n'
        self.finish = 'proc finish { } {\n'\
		  	        + '\tglobal ns tf\n'\
			        + '\t$ns flush-trace\n'\
			        + '\tclose $tf\n'\
			        + '\texit 0\n'\
			        + '}' + '\n'
        self.run = '$ns run' + '\n'
        self.Exit = exit

    def exit(self):
        return '$ns at '+ self.Exit+ ' "finish"' + '\n'

    def newNode(self, element):
        return 'set ' + element.name + ' [$ns node]\n'

    def attachAgent(self, node, element):
        return 'set ' + node.name + element.agent + element.setId + ' [new Agent/' + element.agent + ']\n'\
        +'$ns attach-agent $' + node.name + ' $' + node.name + element.agent + element.setId + '\n'

    def connectAgent(self, node, element):
        return '$ns connect $' + element.receiveFrom + ' $' + node.name + element.agent + element.setId + '\n'

    def agentStart(self, node, element):
        return '$ns at ' + element.agentStartTime + ' "$' + node.name + element.App + element.setId + ' start"' + '\n'

    def agentEnd(self, node, element):
        return '$ns at ' + element.agentEndTime + ' "$' + node.name + element.App + element.setId + ' stop"' + '\n'

    def attachApp(self, node, element):
        return 'set ' + node.name + element.App + element.setId + ' [new Application/' + element.AppFull + ']\n'\
        +'$' + node.name + element.App + element.setId + ' attach-agent $' + node.name + element.agent + element.setId + '\n'

    def appPacketSize(self, node, element):
        return '$' + node.name + element.App + element.setId + ' set packetSize_' + ' ' + element.appPacketSize + '\n'

    def rate(self, node, element):
        return '$' + node.name + element.App + element.setId + ' set rate_'  + ' ' + element.rate + '\n'

    def agentPacketSize(self, node, element):
        return '$' + node.name + element.agent + element.setId + ' set packetSize_'  + ' ' + element.agentPacketSize + '\n'

    def newDuplexLink(self, element):
        return '$ns ' + element.linkType\
        +' $' + element.firPointName\
        +' $' + element.secPointName\
        +' ' + element.bandwidth\
        +' ' + element.delay\
        +' ' + element.queueType\
        +'\n'\
        +'$ns queue-limit'\
        +' $' + element.firPointName\
        +' $' + element.secPointName\
        +' ' + element.queueSize + '\n'