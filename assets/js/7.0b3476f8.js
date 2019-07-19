(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{283:function(t,a,s){"use strict";s.r(a);var n=s(0),p=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[t._v("content\n{:toc}")])]),t._v(" "),s("p",[t._v("在项目开发过程中，总会牵扯到接口文档的设计与编写，之前使用的都是office工具，写一个文档，总也是不够漂亮和直观。好在git上的开源大神提供了生成文档的工具，so来介绍一下！\n该工具是Nodejs的模块，请务必在使用前安装好nodejs环境！")]),t._v(" "),s("h2",{attrs:{id:"安装apidoc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装apidoc","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装Apidoc")]),t._v(" "),s("p",[t._v("1.安装nmp环境,Windows环境可直接通过http://nodejs.org/下载安装包安装")]),t._v(" "),s("p",[t._v("2.安装后在cmd终端执行npm install apidoc –g")]),t._v(" "),s("p",[t._v("4.执行成功终端输入brew install node等待一段时间")]),t._v(" "),s("p",[t._v("5.执行成功终端输入npm –v确认是否npm安装成功\n"),s("a",{attrs:{href:"http://7xt682.com2.z0.glb.clouddn.com/apidoc1.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://7xt682.com2.z0.glb.clouddn.com/apidoc1.png",alt:""}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("6.安装npm成功后执行执行npm install apidoc –g 安装apidoc即可。")]),t._v(" "),s("h2",{attrs:{id:"apidoc使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apidoc使用","aria-hidden":"true"}},[t._v("#")]),t._v(" apidoc使用")]),t._v(" "),s("h3",{attrs:{id:"_1-在项目根目录中创建apidoc-json文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-在项目根目录中创建apidoc-json文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.在项目根目录中创建apidoc.json文件")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apidoc Example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apidoc Example descrption"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Custom apiDoc browser title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sampleUrl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forceLanguage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh-cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"template"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"withCompare"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"withGenerator"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-在对应接口上加上注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在对应接口上加上注释","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.在对应接口上加上注释:")]),t._v(" "),s("p",[t._v("示例:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n *\n * @api {post} /m/login.do  登录\n * @apiName 登录\n * @apiGroup login\n * @apiVersion 1.0.0\n * @apiDescription 接口详细描述\n *\n * @apiParam {String} username 用户名\n * @apiParam {String} password 密码\n *\n * @apiSuccess {String} status 结果码\n * @apiSuccess {String} msg 消息说明\n * @apiSuccessExample Success-Response:\n *  HTTP/1.1 200 OK\n * {\n * status:0,\n * msg:'success',\n * data:{}\n *  }\n *\n *  @apiError All 对应<code>id</code>的用户没找到\n *  @apiErrorExample {json} Error-Response:\n *  HTTP/1.1 200\n *  {\n *   code:-1,\n *   msg:'user not found',\n *   }\n */")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-执行终端命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行终端命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.执行终端命令")]),t._v(" "),s("p",[t._v("apidoc -i example/ -o doc/执行成功就则会在该目录下生成doc文件。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 典型用法")]),t._v("\napidoc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i api"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o doc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*\\.js$"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i 表示输入，后面是文件夹路径\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o 表示输出，后面是文件夹路径\n默认会带上"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c，在当前路径下寻找配置文件")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，如果找不到则会在"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json中寻找 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apidoc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f 为文件过滤，后面是正则表达式，示例为只选着js文件\n  与"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f类似，还有一个 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e 的选项，表示要排除的文件"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("文件夹，也是使用正则表达式\n")])])]),s("p",[t._v("示例:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("apidoc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\example "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\doc\n")])])]),s("p",[t._v("这样就会在e:\\doc目录下生成项目的doc文档,点开index.html就会看到如下效果")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://7xt682.com2.z0.glb.clouddn.com/apidoc2.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://7xt682.com2.z0.glb.clouddn.com/apidoc2.png",alt:""}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"apidoc代码注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apidoc代码注释","aria-hidden":"true"}},[t._v("#")]),t._v(" apidoc代码注释")]),t._v(" "),s("p",[t._v("apidoc支持如下关键字")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[t._v("\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("api")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  只有使用@api标注的注释块才会在解析之后生成文档，title会被解析为导航菜单"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@apiGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("下的小菜单\n  method可以有空格，如"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("POST GET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@apiGroup name\n  分组名称，被解析为导航栏菜单\n@apiName name\n  接口名称，在同一个@apiGroup下，名称相同的@api通过@apiVersion区分，否者后面@api会覆盖前面定义的@api\n@apiDescription text\n  接口描述，支持html语法\n@apiVersion verison\n  接口版本，major"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("patch的形式\n\n@apiIgnore "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  apidoc会忽略使用@apiIgnore标注的接口，hint为描述\n@apiSampleRequest url\n  接口测试地址以供测试，发送请求时，@api method必须为POST"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("GET等其中一种\n\n@apiDefine name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  定义一个注释块"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不包含@api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，配合@apiUse使用可以引入注释块\n  在@apiDefine内部不可以使用@apiUse\n@apiUse name\n  引入一个@apiDefine的注释块\n\n@apiParam "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("defaultValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n@apiHeader "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("defaultValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n@apiError "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" field "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n@apiSuccess "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" field "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  用法基本类似，分别描述请求参数、头部，响应错误和成功\n  group表示参数的分组，type表示类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不能有空格"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，入参可以定义默认值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不能有空格"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@apiParamExample "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" example\n@apiHeaderExample "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" example\n@apiErrorExample "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" example\n@apiSuccessExample "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" example\n  用法完全一致，但是type表示的是example的语言类型\n  example书写成什么样就会解析成什么样，所以最好是书写的时候注意格式化，"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("许多编辑器都有列模式，可以使用列模式快速对代码添加"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@apiPermission name\n  name必须独一无二，描述@api的访问权限，如admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("anyone\n")])])]),s("p",[t._v("详细文档参考http://caixw.oschina.io/apidoc/")])])},[],!1,null,null,null);a.default=p.exports}}]);