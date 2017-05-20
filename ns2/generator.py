#!/usr/bin/env python
# -*- coding:utf-8 -*-

class Node():
    def __init__(self, apps):
        self.name = str(apps[0][0])
        self.setting = []
        for i in apps:
            self.app(i)

    def app(self, apps):
        name, rate, agentStartTime, agentEndTime, setId, appPacketSize, app, appfull, agent, agentPacketSize, congestionWindow, receiveFrom = apps
        self.setting.append(App(rate, agentStartTime, agentEndTime, setId, appPacketSize, app, appfull, agent, agentPacketSize, congestionWindow, receiveFrom))

class App():
    def __init__(self, rate, agentStartTime, agentEndTime, setId, appPacketSize='', app='', appfull='', agent='', agentPacketSize='', congestionWindow='', receiveFrom=''):
        self.appPacketSize = str(appPacketSize)
        self.rate = str(rate)
        self.App = str(app)
        self.AppFull = str(appfull)
        self.agent = str(agent)
        self.agentPacketSize = str(agentPacketSize)
        self.congestionWindow = str(congestionWindow)
        self.receiveFrom = str(receiveFrom)
        self.agentStartTime = str(agentStartTime)
        self.agentEndTime = str(agentEndTime)
        self.setId = str(setId)



class Link():
    def __init__(self, linkarea):
        self.linkType, self.firPointName, self.secPointName, self.bandwidth, self.delay, self.queueType, self.queueSize = linkarea

class Generator():
    def __init__(self, code):
        self.code = code
        self.cmd = self.code.newSimulator + self.code.trace

    def load(self, nodes, links):
        # node
        if not nodes[0]:
            return ''
        for i in nodes:
            self.cmd += self.code.newNode(i)
        self.cmd += '\n'

        # link
        if not links[0]:
            return ''
        for i in links:
            self.cmd += self.code.newDuplexLink(i)
        self.cmd += '\n'

        # attach-agent
        for i in nodes:
            for j in i.setting:
                if j.agent:
                    self.cmd += self.code.attachAgent(i, j)
        self.cmd += '\n'

        # Agent PacketSize
        for i in nodes:
            for j in i.setting:
                if j.agentPacketSize:
                    self.cmd += self.code.agentPacketSize(i, j)
        self.cmd += '\n'

        # attach-App
        for i in nodes:
            for j in i.setting:
                if j.AppFull:
                    self.cmd += self.code.attachApp(i, j)
        self.cmd += '\n'

        # App PacketSize
        for i in nodes:
            for j in i.setting:
                if j.appPacketSize:
                    self.cmd += self.code.appPacketSize(i, j)
        self.cmd += '\n'

        # App Rate
        for i in nodes:
            for j in i.setting:
                if j.rate:
                    self.cmd += self.code.rate(i, j)
        self.cmd += '\n'


        # connect-agent
        for i in nodes:
            for j in i.setting:
                if j.receiveFrom:
                    self.cmd += self.code.connectAgent(i, j)
        self.cmd += '\n'

        # start
        for i in nodes:
            for j in i.setting:
                if j.agent == 'TCP' or j.agent == 'UDP':
                    self.cmd += self.code.agentStart(i, j)
        self.cmd += '\n'

        # end
        for i in nodes:
            for j in i.setting:
                if j.agent == 'TCP' or j.agent == 'UDP':
                    self.cmd += self.code.agentEnd(i, j)
        self.cmd += '\n'

        # exit
        self.cmd += self.code.exit()

        # finish
        self.cmd += self.code.finish

        # run
        self.cmd += self.code.run

        return self.cmd
