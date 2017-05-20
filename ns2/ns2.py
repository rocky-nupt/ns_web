#!/usr/bin/env python
# -*- coding:utf-8 -*-

import commands
from datetime import datetime

# ns2执行
def ns(args):
    with open('temp/test.tcl', 'w+') as f:
        f.write(args)
    output = commands.getoutput('ns temp/test.tcl')
    log(args, output)
    return output

# 记录日志
def log(args, output):
    now = str(datetime.now())
    time = now[:-7]
    today = now[:10]
    logname = 'temp/' + today + '.log'
    with open(logname, 'a+') as f:
        log = time + ':\n' + 'cmd:' + args + '\n' + 'ret:' + output + '\n'
        f.write(log)