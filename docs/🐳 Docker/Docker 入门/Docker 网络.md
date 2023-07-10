# Docker 网络

## 理解 Docker0

![image-20230710104445855](./assets/image-20230710104445855.png)

三个网络

**Docker 是如何处理容器网络访问的？**

```shell
docker run -d -P --name tomcat01 tomcat
# 查看容器内部网络地址 ip addr，发现容器有一个 Docker 分配的 ip 地址
docker exec -it tomcat01 ip addr

# 宿主机 ping 容器内部
ping 

# 可以 ping 通
```

每启动一个 Docker 容器，Docker 就会给它分配一个 ip。桥接模式，使用的是 veth-pair 技术。

> veth-pair 是一对虚拟设备接口，它们成对出现，一段连着协议，一段彼此相连，充当一个桥梁，连接各种虚拟网络设备

![image-20230710104509658](./assets/image-20230710104509658.png)

**Docker 中的所有网络接口都是虚拟的，转发效率高。**

## 自定义网络

查看所有 Docker 网络

![image-20230710104527551](./assets/image-20230710104527551.png)

**网络模式：**

bridge：桥接（默认）

none：不配置网络

host：和宿主机共享网络

```shell
docker network --help
# create
# connect
```

**好处：**

不同的集群使用不同的网络，保证集群是安全和健康的。