# 构建 VuePress 容器镜像

1. 新建一个名为 `Dockerfile` 的文件，并根据 [快速上手 | VuePress (vuejs.org)](https://vuepress.vuejs.org/zh/guide/getting-started.html) 中环境配置的相关步骤编写，具体内容如下：

   ```dockerfile
   FROM node:18.16  # 基于 node 18.16 版本构建
   ENV WORK_DIR ./vuepress  # 设置容器内工作目录
   WORKDIR $WORK_DIR
   EXPOSE 8080  # 设置容器暴露端口
   
   RUN yarn config set registry https://registry.npm.taobao.org/ \  # Yarn 更换国内源
       && yarn init -y \  # Yarn 项目初始化
       && yarn add -D vuepress \  # 将 VuePress 安装为本地依赖
       && yarn add -D vuepress-plugin-mathjax \  # 安装 Tex 语法插件
       # 创建 demo 文档，运行容器时宿主机应当绑定挂载到此目录
       && mkdir docs \
       && echo '# Hello VuePress' > docs/README.md \
       # 在 package.json 中添加一些 scripts
       && sed -i '$i\
     ,"scripts": {\
       "docs:dev": "vuepress dev docs",\
       "docs:build": "vuepress build docs"\
     }' package.json \
       # 清除缓存，最小化镜像
       && yarn cache clean
   
   # 为了解决本地服务器启动时报错：Error message "error:0308010C:digital envelope routines::unsupported
   ENV NODE_OPTIONS --openssl-legacy-provider
   # 本地启动服务器
   CMD yarn docs:dev
   ```

2. 使用 `docker build` 命令构建镜像，注意标识镜像的 tag。

2. 使用 `docker run` 命令启动容器，具体如下：

   ```sh
   docker run -itd \  # 后台运行，可以交互
   	-p 8080:8080 \  # 绑定端口
   	--name my-blog \  # 容器名称
   	--mount type=bind,src=/absolute/path/to/docs,target=/vuepress/docs \  # 绑定挂载
   	kendrick-song/vuepress-base:2.0  # 镜像名称
   ```

   运行时记得自定义容器名称、绑定挂载路径，并删掉注释。

4. （可选）使用 `docker exec -it <the-container-id/name> /bin/bash` 命令进入容器，查看挂载目录下的文件，确认目录已经正确被挂载。

4. 用浏览器访问 `127.0.0.1:8080/path/to/docs.html` 测试 VuePress 服务器正常运行。

   ::: tip

   若出现 404，通常情况下是路径出现了问题，具体参考 [默认的页面路由 | VuePress (vuejs.org)](https://vuepress.vuejs.org/zh/guide/directory-structure.html#默认的页面路由)。

   :::
   
   test