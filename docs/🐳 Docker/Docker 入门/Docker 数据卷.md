# Docker 数据卷

## 什么是数据卷

> 数据在容器内的话，容器删除，数据将丢失！
>
> **需要将数据持久化**

Docker 容器中产生的数据，可以通过数据卷同步到本地，将容器内的目录挂载到宿主机上。

主要功能：容器的持久化和同步，容器间的数据共享

## 使用数据卷

### 方式一：直接使用`-v`命令挂载

```shell
# docker run -it -v 主机目录：容器内目录

# 测试
$ docker run -it -v ~/Desktop/home:/home centos /bin/bash
Unable to find image 'centos:latest' locally
latest: Pulling from library/centos
a1d0c7532777: Pull complete
Digest: sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177
Status: Downloaded newer image for centos:latest

# 查看挂载
$ docker inspect a86e926d148c
...
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/Users/kendrick_song/Desktop/home",
                "Destination": "/home",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
...
```

**具名挂载和匿名挂载**

```shell
# 匿名挂载
-v 容器内路径
# docker run -d --name nginx01 -v /etc/nginx nginx
# docker volume ls  # 查看卷情况
local	xxxxxxxxxxxxxx

# 具名挂载
# docker run -d --name nginx01 -v NAME:/etc/nginx nginx
# docker volume ls  # 查看所有卷情况
local	NAME 

# docker volume inspect  # 查看具体卷情况
```

![image-20230509195512776](https://kendrick-song.github.io/my-blog/assets/img/image-20230509195512776.35754c25.png)

匿名挂载默认目录：`/var/lib/docker/volumes/NAME/_data`

通过具名挂载可以方便的找到一个卷，大多数情况下都使用**具名挂载**

```shell
-v 容器内路径            # 匿名挂载
-v 卷名:容器内路径        # 具名挂载
-v /宿主机路径:容器内路径  # 指定路径挂载
```

### 方式二：DockerFile

DockerFile 是用来构建 Docker 镜像的脚本文件，通过这个脚本可以生成镜像，脚本中的每个命令都是镜像中的一层。

```shell
# 创建 DockerFile 文件
FROM centos
VOLUME ["volume01","volume02"]  # 容器内路径（匿名挂载）
CMD echo "---end---"
CMD /bin/bash
```

## 数据卷容器

多个容器同步数据。

![image-20230509201615014](https://kendrick-song.github.io/my-blog/assets/img/image-20230509201615014.2331f35b.png)

```shell
# --volumes-from
# 启动多个容器
docker run -it --name docker01 -v volume01 centos /bin/bash
docker run -it --name docker02 --volumes-from docker01 centos /bin/bash
```