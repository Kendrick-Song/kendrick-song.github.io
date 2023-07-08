# VuePress 部署

## 部署到 Github Pages

### 创建远程仓库

在 [GitHub](https://github.com/) 中新建一个仓库，仓库名称这里输入 `username.github.io` 作为存储库名称。 将 `username` 替换为你的 GitHub 用户名。 例如，如果用户名为 `octocat`，则存储库名称应为 `octocat.github.io`。

::: tip 注意

如果你打算将博客发布到 `https://<USERNAME>.github.io/`，那么就按照上述步骤进行配置；

如果你打算将博客发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将仓库名称改为 `<REPO>`，并在 `config.js` 中将 `base` 设置为 `"/<REPO>/"`。

:::

这个仓库就是我们博客的仓库，其应当有两个分支，在后续 push 时尽量遵从：

- main：存储项目所有的文件，除构建文件（比如 `dist`）；
- deploy：博客的部署分支，用于 Github Pages 的展示，存放项目的构建后文件。

### 创建本地仓库

::: warning 注意

我们在容器内的所有本地操作，都仅限于当前容器。基于相同镜像新建的容器是没有我们后续操作产生的任何文件的。血泪教训：[容器内对挂载文件夹使用 `mv` 命令导致主机对应文件全部被删除 😭](./踩坑记录.md#容器内对挂载文件夹使用-mv-命令导致主机对应文件全部被删除-😭)

如果担心哪一天这个容器被玩坏了，从镜像新建容器还要再来一遍相同的步骤，觉得麻烦，可以在操作完以下步骤后用 `docker commit` 命令将这个容器的本地操作提交为一个镜像，这就相当于给容器拍了个快照，以后可以从这个新镜像新建容器。

:::

#### 配置 Git

用 `docker exec` 命令进入容器的 bash，根据 [Git - 初次运行 Git 前的配置 (git-scm.com)](https://git-scm.com/book/zh/v2/起步-初次运行-Git-前的配置) 中**用户信息**一节设置你的用户名和邮件地址。

::: danger 重要

设置你的用户名和邮件地址这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改。

:::

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

设置完成后可以通过 `git config --list` 确认设置正确。

#### 通过 SSH 连接到 GitHub

没有人希望自己的仓库可以被其他人随意修改，当我们 push 到远程仓库时，Github 会通过 SSH（安全外壳协议）检查我们当前是否有权限对仓库进行修改。

所以对于一个新机器，我们需要生成它的 SSH 密钥对，并将公钥添加到 GitHub 账户中以启用这台机器对 Github 帐户的 SSH 访问。

1. 输入 `ls -al ~/.ssh` 以查看是否存在现有的 SSH 密钥对。默认情况下，GitHub 的一个支持的公钥的文件名是以下之一：

   - id_rsa.pub
   - id_ecdsa.pub
   - id_ed25519.pub

   ::: tip 提示

   如果收到错误，指示 `~/.ssh` 不存在，则表明默认位置中没有现有的 SSH 密钥对。 您可以在下一步中创建新的 SSH 密钥对。

   :::

2. 若没有密钥对，使用下列命令生成密钥对（替换为您的 GitHub 电子邮件地址），这将以提供的电子邮件地址为标签创建新 SSH 密钥：

   ```sh
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   执行后一路回车即可。
   
3. 查看 SSH 公钥，并复制下来：

   ```bash
   $ cat ~/.ssh/id_ed25519.pub
   ```

4. 在 Github 中单击右上角个人资料照片 → Settings → 边栏中选择「SSH 和 GPG 密钥」→ 「New SSH key」进入到添加 SSH key 的页面。粘贴公钥并设置对应 Title，比如 「个人笔记本电脑」。

至此我们 SSH 相关配置就完成了。

#### 创建本地仓库

在项目根目录下（`/vuepress`）执行以下命令初始化本地仓库：

```bash
$ git init
```

新建 `.gitignore` 文件，并写入不需要上传的文件：

```bash
# -e 参数：启用转义符号
$ touch .gitignore && echo -e 'node_modules\ndist\n.DS_Store' >> .gitignore
$ cat .gitignore
node_modules
dist
```

使用 `git add -A` 将文件添加到暂存区，`git commit -m 'first commit'` 提交修改。

设置远程仓库：

```bash
$ git remote add origin git@github.com:<USERNAME>/<USERNAME/REPO>.github.io.git
```

推送到远程仓库：

```bash
$ git push -u origin master:main
```

> `-u`  参数其实就相当于记录了 push 到远端分支的默认值，这样当下次我们还想要继续 push 的这个远端分支的时候推送命令就可以简写成 `git push` 即可

## 部署

基础部署请参考 [官方文档](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)，这里只介绍使用 Github Actions 的集成部署。

GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

可配置 GitHub Actions 工作流，使其在存储库中发生事件（例如打开拉取请求或创建问题）时触发 。 工作流包含一个或多个可按顺序或并行运行的作业。 每个作业都将在其自己的虚拟机运行器中或在容器中运行，并具有一个或多个步骤，用于运行定义的脚本或运行动作。动作是一个可重用的扩展，可简化工作流 。
