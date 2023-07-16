(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{291:function(s,t,a){s.exports=a.p+"assets/img/image-20230710104556467.2fea9e8d.png"},292:function(s,t,a){s.exports=a.p+"assets/img/image-20230710104619776.d56af663.png"},293:function(s,t,a){s.exports=a.p+"assets/img/image-20230710104632107.5217880f.png"},294:function(s,t,a){s.exports=a.p+"assets/img/image-20230710104712535.8b05f758.png"},295:function(s,t,a){s.exports=a.p+"assets/img/image-20230710104654091.6c672f4b.png"},324:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" DockerFile")]),s._v(" "),t("h2",{attrs:{id:"dockerfile-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-介绍"}},[s._v("#")]),s._v(" DockerFile 介绍")]),s._v(" "),t("p",[s._v("DockerFile 是用来构建 Docker 镜像的文件")]),s._v(" "),t("p",[s._v("构建步骤：")]),s._v(" "),t("ol",[t("li",[s._v("编写 DockerFile 文件")]),s._v(" "),t("li",[t("code",[s._v("docker build")]),s._v(" 构建镜像")]),s._v(" "),t("li",[t("code",[s._v("docker run")]),s._v(" 运行镜像")]),s._v(" "),t("li",[t("code",[s._v("docker push")]),s._v(" 发布镜像")])]),s._v(" "),t("p",[s._v("官方镜像 DockerFile 查看：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(291),alt:"image-20230710104556467"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(292),alt:"image-20230710104619776"}})]),s._v(" "),t("blockquote",[t("p",[s._v("很多官方镜像都是基础包，很多功能没有，需要自行添加。")])]),s._v(" "),t("h2",{attrs:{id:"dockerfile-构建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-构建过程"}},[s._v("#")]),s._v(" DockerFile 构建过程")]),s._v(" "),t("h3",{attrs:{id:"基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[s._v("#")]),s._v(" 基础知识：")]),s._v(" "),t("ul",[t("li",[s._v("每个保留关键字（指令）都必须是大写字母")]),s._v(" "),t("li",[s._v("执行是从上到下顺序执行")]),s._v(" "),t("li",[t("code",[s._v("#")]),s._v(" 表示注释")]),s._v(" "),t("li",[s._v("每个指令都会创建提交一个新的镜像层")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(293),alt:"image-20230710104632107"}})]),s._v(" "),t("p",[s._v("DockerFile 是面向开发的，发布项目做镜像需要编写 DockerFile 文件。")]),s._v(" "),t("p",[t("strong",[s._v("DockerFile")]),s._v("：构建文件，定义镜像")]),s._v(" "),t("p",[t("strong",[s._v("Docker Images")]),s._v("：通过 DockerFile 构建生成的镜像")]),s._v(" "),t("p",[t("strong",[s._v("Docker 容器：")]),s._v(" 容器是镜像的实例")]),s._v(" "),t("h2",{attrs:{id:"dockerfile-指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-指令"}},[s._v("#")]),s._v(" DockerFile 指令")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" xx\t\t\t# 基础镜像，一切从这里开始构建")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" xx\t# 镜像维护者信息,通常是姓名+邮箱")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" xx\t\t\t# 镜像构建时需要运行的命令（你想让它做什么）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" xx\t\t\t# 添加内容，比如 Tomcat")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" xx\t\t# 设置镜像当前工作目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" xx\t\t# 设置卷，要挂载的目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" xx\t\t# 指定暴露端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" xx\t\t\t# 指定容器启动后要运行的程序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" xx\t\t\t# 指定容器启动后要运行的命令，只有最后一条会生效")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" xx\t# 指定容器启动后要运行的命令，可以追加命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ONBUILD")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("xx")]),s._v("\t\t# 当构建一个被继承的 DockerFile 时，该指令会被触发")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" xx\t\t\t# 将文件拷贝到镜像中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" xx\t\t\t# 构建的时候设置环境变量")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"练习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[s._v("#")]),s._v(" 练习")]),s._v(" "),t("blockquote",[t("p",[s._v("Docker Hub 中 99% 的镜像都是从 "),t("code",[s._v("FROM scratch")]),s._v(" 开始的")])]),s._v(" "),t("p",[t("strong",[s._v("创建一个自己的 CentOS：")])]),s._v(" "),t("ol",[t("li",[s._v("编写配置文件")])]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" centos")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" kendrcik<xxx@xxx.com>")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" MYPATH /usr/local")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYPATH")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum -y install vim")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum -y install net-tools")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 80")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYPATH")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-----end-----"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" /bin/bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("构建")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker build [OPTIONS] PATH | URL | -")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\tName of the Dockerfile "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Default is "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("/Dockerfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 文件路径 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" 镜像名:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("测试运行")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" 镜像 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("查看镜像构建历史")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" 镜像\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(294),alt:"image-20230710104712535"}})]),s._v(" "),t("p",[t("strong",[s._v("自制 Tomcat 镜像：")])]),s._v(" "),t("ol",[t("li",[s._v("准备镜像文件，Tomcat 压缩包，JDK 压缩包")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(295),alt:"image-20230710104654091"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("编写 DockerFile 文件")])]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  centos")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" kendrick<xxx@xxx.com>")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" readme.txt /usr/local/readme.txt")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" jdk-8ull-linux-x64.tar.gz /usr/local")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" apache-tomcat-xxx /usr/local")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum-y install vim")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" MYPATH /usr/local")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYPATH")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" JAVA_HOME /usr/local/jdk1.8.0_11")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" CLASSPATH "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" CATALINA_HOME /usr/local/apache-tomcat-xxx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" CATALINA_BASH /usr/local/apache-tomcat-xxx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PATH "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAV_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_HOME")]),s._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_BASH")]),s._v("/bin")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8080")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_HOME")]),s._v("/bin/startup.sh && tail -F /usr/local/apache-tomcat-xxx/bin/logs/catalina.out")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("构建镜像")])]),s._v(" "),t("h2",{attrs:{id:"发布镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布镜像"}},[s._v("#")]),s._v(" 发布镜像")]),s._v(" "),t("ol",[t("li",[s._v("登录 Docker Hub："),t("code",[s._v("docker login")])]),s._v(" "),t("li",[s._v("提交镜像："),t("code",[s._v("docker push")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);