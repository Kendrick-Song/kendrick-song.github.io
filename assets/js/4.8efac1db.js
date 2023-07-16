(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{280:function(v,_,r){v.exports=r.p+"assets/img/image-20230508192038755.5b58c289.5b58c289.png"},281:function(v,_,r){v.exports=r.p+"assets/img/image-20230710105548882.166d75f4.png"},282:function(v,_,r){v.exports=r.p+"assets/img/image-20230508193832916.40195a3d.40195a3d.png"},283:function(v,_,r){v.exports=r.p+"assets/img/image-20230508200328434.32100c12.32100c12.png"},284:function(v,_,r){v.exports=r.p+"assets/img/image-20230508200507154.fa071cfa.fa071cfa.png"},285:function(v,_,r){v.exports=r.p+"assets/img/image-20230508201140565.89470198.89470198.png"},286:function(v,_,r){v.exports=r.p+"assets/img/image-20230508201118387.d72281af.d72281af.png"},321:function(v,_,r){"use strict";r.r(_);var t=r(14),e=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"docker-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-概述"}},[v._v("#")]),v._v(" Docker 概述")]),v._v(" "),_("h2",{attrs:{id:"docker-为什么会出现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-为什么会出现"}},[v._v("#")]),v._v(" Docker 为什么会出现")]),v._v(" "),_("blockquote",[_("p",[v._v("所有新技术的出现都是为了解决当时存在的一些问题")])]),v._v(" "),_("p",[v._v("早期产品开发流程：开发 --\x3e 上线，共两套环境。"),_("strong",[v._v("开发环境")]),v._v("和"),_("strong",[v._v("运维环境")]),v._v("不同。")]),v._v(" "),_("p",[_("strong",[v._v("问题：我本地能跑通啊！为什么你那里不可以！/ 版本更新导致服务不可用")])]),v._v(" "),_("p",[v._v("本质上是因为环境配置十分麻烦，且很浪费时间，尤其是集群")]),v._v(" "),_("p",[_("strong",[v._v("解决方案：能不能再发布产品的时候带上环境呢？")])]),v._v(" "),_("p",[v._v("Docker 出现")]),v._v(" "),_("p",[v._v("打包项目带上环境（镜像），环境（镜像）发布在 Docker 仓库，可从中下载镜像")]),v._v(" "),_("p",[_("strong",[v._v("核心思想：隔离")]),v._v("。通过隔离机制，可以将服务器性能压榨到极致")]),v._v(" "),_("p",[_("strong",[v._v("核心优点：轻量")]),v._v("。在容器技术出现之前，主流使用虚拟机技术")]),v._v(" "),_("p",[v._v("虚拟机：通过软件在已有系统中虚拟出一台或多台电脑，包含所有内容，十分笨重")]),v._v(" "),_("p",[v._v("Docker：镜像只包括运行程序最核心的环境，轻便")]),v._v(" "),_("h2",{attrs:{id:"docker-发展历程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-发展历程"}},[v._v("#")]),v._v(" Docker 发展历程")]),v._v(" "),_("p",[v._v("2010 年，在美国成立公司 "),_("code",[v._v("dotcloud")]),v._v("，主营 PaaS 云计算服务，Linux 相关的容器化技术，后期将该技术命名为 "),_("code",[v._v("Docker")]),v._v("。")]),v._v(" "),_("p",[v._v("Docker 诞生之初并没有引起行业注意，为了公司存活，不得已将 Docker 被开源，越来越多的人发现了 Docker 的优点，关注的人越来越多，社区十分活跃。")]),v._v(" "),_("p",[v._v("2014 年 4 月 9 日，Docker 1.0 正式发布。")]),v._v(" "),_("p",[v._v("Docker 是基于 Go 语言开发的开源项目，"),_("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("官方文档"),_("OutboundLink")],1),v._v("十分详细")]),v._v(" "),_("h2",{attrs:{id:"docker-能做什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-能做什么"}},[v._v("#")]),v._v(" Docker 能做什么")]),v._v(" "),_("p",[_("strong",[v._v("传统虚拟机结构：")])]),v._v(" "),_("p",[_("img",{attrs:{src:r(280),alt:"image-20230508192038755"}})]),v._v(" "),_("p",[v._v("缺点：")]),v._v(" "),_("ol",[_("li",[v._v("资源占用多")]),v._v(" "),_("li",[v._v("冗余步骤多")]),v._v(" "),_("li",[v._v("启动慢")])]),v._v(" "),_("p",[_("strong",[v._v("容器化虚拟技术结构：")])]),v._v(" "),_("p",[_("strong",[v._v("容器化技术不是模拟一个完整的操作系统。")])]),v._v(" "),_("p",[_("img",{attrs:{src:r(281),alt:"image-20230710105548882"}})]),v._v(" "),_("p",[v._v("比较传统虚拟机与 Docker 容器技术：")]),v._v(" "),_("ul",[_("li",[v._v("传统虚拟机会虚拟出一套硬件，运行一个完整的操作系统，在该系统上安装和运行软件")]),v._v(" "),_("li",[v._v("容器内的应用直接运行在宿主机，容器没有虚拟硬件，仅包含运行软件所需的必要程序，所以轻便")]),v._v(" "),_("li",[v._v("每个容器间互相隔离，每个容器内部都有一个属于自己的文件系统，互不影响")])]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("DevOps（开发、运维）")])]),v._v(" "),_("ul",[_("li",[v._v("应用能够更快速的交付和部署")])]),v._v(" "),_("p",[v._v("传统：一堆帮助文档，安装程序")]),v._v(" "),_("p",[v._v("Docker：打包镜像，发布测试，一键运行")]),v._v(" "),_("ul",[_("li",[v._v("更便捷的升级和扩缩容")])]),v._v(" "),_("p",[v._v("项目打包为一个镜像，通过『搭积木』的方式进行扩容（缩容）")]),v._v(" "),_("ul",[_("li",[v._v("更简单的系统运维")])]),v._v(" "),_("p",[v._v("容器化之后，开发、测试环境都高度一致")]),v._v(" "),_("ul",[_("li",[v._v("更高效的计算资源利用")])]),v._v(" "),_("p",[v._v("Docker 是内核级别的虚拟化，宿主机的资源分配粒度更细，利用率更高")])]),v._v(" "),_("h2",{attrs:{id:"docker-基本组成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-基本组成"}},[v._v("#")]),v._v(" Docker 基本组成")]),v._v(" "),_("p",[_("img",{attrs:{src:r(282),alt:"image-20230508193832916.40195a3d"}})]),v._v(" "),_("p",[_("strong",[v._v("镜像（image）:")])]),v._v(" "),_("p",[v._v("Docker 镜像就好比是一个模板，可以通过这个模板来创建容器服务。")]),v._v(" "),_("p",[v._v("通过一个镜像可以创建多个容器，最终服务运行就是在容器中。")]),v._v(" "),_("p",[_("strong",[v._v("容器（container）：")])]),v._v(" "),_("p",[v._v("Docker 利用容器技术，独立运行一个或者一组应用的实例。")]),v._v(" "),_("p",[v._v("可以简单理解为是一个简易的 Linux 系统。")]),v._v(" "),_("p",[_("strong",[v._v("仓库（repository）：")])]),v._v(" "),_("p",[v._v("仓库是存放镜像的地方，分为公有仓库和私有仓库")]),v._v(" "),_("h2",{attrs:{id:"hello-world-流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-流程"}},[v._v("#")]),v._v(" Hello World 流程")]),v._v(" "),_("p",[_("img",{attrs:{src:r(283),alt:"image-20230508200328434.32100c12"}})]),v._v(" "),_("p",[_("code",[v._v("run")]),v._v("命令的运行流程图：")]),v._v(" "),_("p",[_("img",{attrs:{src:r(284),alt:"image-20230508200507154.fa071cfa"}})]),v._v(" "),_("h2",{attrs:{id:"docker-怎么工作的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-怎么工作的"}},[v._v("#")]),v._v(" Docker 怎么工作的")]),v._v(" "),_("p",[v._v("Docker 是一个 Client-Server 结构的系统，Docker 的守护进程运行在主机上，通过 Socket 从客户端访问。")]),v._v(" "),_("p",[v._v("Docker-Server 接收到 Docker-Client 的指令，就会执行。")]),v._v(" "),_("p",[_("img",{attrs:{src:r(285),alt:"image-20230508201140565.89470198"}})]),v._v(" "),_("p",[_("strong",[v._v("Docker 为什么比虚拟机快：")])]),v._v(" "),_("p",[_("img",{attrs:{src:r(286),alt:"image-20230508201118387.d72281af"}})]),v._v(" "),_("ol",[_("li",[v._v("Docker 比虚拟机的抽象层更少。")]),v._v(" "),_("li",[v._v("Docker 利用的是宿主机的内核，虚拟机需要 Guest OS。所以新建容器的时候，Docker 不需要加载一个操作系统内核，避免引导。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);