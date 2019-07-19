(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(t,e,n){"use strict";n.r(e);var r=n(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("ul",[n("li",[t._v("content\n{:toc}\njetty 相关配置\n")])]),t._v(" "),n("h2",{attrs:{id:"_1-设置jetty端口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置jetty端口","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.设置jetty端口")]),t._v(" "),n("p",[t._v("修改 etc/jetty.xml文件中 default对应值")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://7xt682.com2.z0.glb.clouddn.com/jetty1.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://7xt682.com2.z0.glb.clouddn.com/jetty1.png",alt:""}}),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"_2-修改jetty临时文件目录-发布目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改jetty临时文件目录-发布目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.修改jetty临时文件目录(发布目录)")]),t._v(" "),n("p",[t._v("由于linux系统中jetty默认临时文件目录是在/tmp目录下,而linux会定期清理/tmp目录下文件,如果jetty下面运行的是生产环境的项目,长时间不重启,linux刚好清理/tmp下文件会导致项目文件缺失.所以在配置jetty时最好修改临时文件目录.")]),t._v(" "),n("p",[t._v("修改方法: 修改 bin/jetty.sh 找到下面一行")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://7xt682.com2.z0.glb.clouddn.com/jetty2.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://7xt682.com2.z0.glb.clouddn.com/jetty2.png",alt:""}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("将TMPDIR的值修改为指定的目录. 如TMPDIR=/data/app/jetty7/tmp")]),t._v(" "),n("h2",{attrs:{id:"_3-linux运行多个jetty"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux运行多个jetty","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.linux运行多个jetty")]),t._v(" "),n("p",[t._v("linux部署多个jetty实例相对windows要麻烦一点,除了复制jetty目录外,需要以下两个步骤:")]),t._v(" "),n("pre",[n("code",[t._v(" 1).指定pid所在目录,在jetty下创建run目录\n\n      #mkdir run\n\n 2).修改 bin/jetty.sh 增加JETTY_HOME,JETTY_RUN两项.\n\n      JETTY_HOME为当前jetty目录  ,JETTY_RUN为jetty的pid所在目录.如:\n\n           JETTY_HOME=/data/app/jetty7\n\n           JETTY_RUN=$JETTY_HOME/run\n")])]),t._v(" "),n("h2",{attrs:{id:"_4-jetty常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-jetty常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.jetty常用命令")]),t._v(" "),n("pre",[n("code",[t._v(" bin/jetty.sh start          启动\n\n bin/jetty.sh restart       重启\n\n bin/jetty.sh stop          停止\n")])])])},[],!1,null,null,null);e.default=a.exports}}]);