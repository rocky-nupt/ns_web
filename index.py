#!/usr/bin/env python
# -*- coding:utf-8 -*-

import tornado.web
import tornado.ioloop
from ns2.code import Code
from ns2.generator import *
from ns2.ns2 import *
import json




# 主页面,run
class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('NS.html')

    def post(self, *args, **kwargs):
        inputs = self.get_argument('cmd')
        if not inputs == '':
            output = ns(inputs)
        self.write(output)


# generator代码生成
class GeneratorHandler(tornado.web.RequestHandler):
    def post(self, *args, **kwargs):
        nodearea = list(json.loads(self.get_argument('nodes')))
        linkarea = list(json.loads(self.get_argument('links')))
        exit = str(json.loads(self.get_argument('exit')))
        NODES = []
        LINKS = []
        for i in nodearea:
            node = Node(i)
            NODES.append(node)
        for i in linkarea:
            link = Link(i)
            LINKS.append(link)
        code = Code(exit)
        generator = Generator(code)
        codearea = generator.load(NODES, LINKS)
        self.write(json.dumps(codearea))

# trace文件获取
class TraceHandler(tornado.web.RequestHandler):
    def post(self, *args, **kwargs):
        with open('trace.tr') as f:
            trace = f.read()
        self.write(trace)


#模板路径的配置
settings = {
    'template_path': 'template',
    'static_path': 'template/static',
}

# 路由映射，路由系统
application = tornado.web.Application([
    (r"/index", MainHandler),
    (r"/generator", GeneratorHandler),
    (r'/trace', TraceHandler),
], **settings)

if __name__ == "__main__":
    application.listen(9999)
    tornado.ioloop.IOLoop.instance().start()