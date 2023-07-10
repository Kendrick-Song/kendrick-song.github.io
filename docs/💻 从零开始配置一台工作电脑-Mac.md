# 💻 从零开始配置一台工作电脑-Mac

[[toc]]

打造一台得心应手的工作电脑总是需要耗费大量时间和精力的，但是「工欲善其事，必先利其器」，不好好配置一下新电脑的话，工作效率多多少少都会受到影响，干起活来也有些别扭。

恰逢实习入职需要配置电脑，就尽可能的记录下来，也方便后续再配置新电脑时参考。

> 实习领到的电脑是全新的 M2 Pro 芯片的 MacBook Pro 16，我一个实习生能领到这么好的电脑还是非常开心的哈哈哈哈哈 😄。

## 系统配置

首先是系统配置，新电脑都会有一个配置引导，当然啦，由于是工作电脑，是不允许登录 Apple 账户的，所以在登录那里需要选择跳过，后面配置一个单机用户就可以了。

进入系统我们首先来调整系统设置，我一般从最影响使用体验的方面开始调整：

::: tip 提示

以下配置中没有提及的设置均为默认设置。

:::

### 触控板

::: details 点击查看

- **系统设置 → 触控板：**
  - 光标与点按：
    - 跟踪速度：我习惯的速度通常比默认速度要快，在左数第五格左右
    - 轻点来点按：打开
  - 滚动缩放：全部打开
  - 更多手势：全部打开
- **系统设置 → 辅助功能：**
  - 指针控制 → 触控板选项 → 拖移样式
    - 选择「三指拖移」

:::

### 键盘

::: details 点击查看

- **系统设置 → 键盘：**
  - 键盘导航：打开
  - 键盘快捷键…：
    - 输入法：
      - 选择上一个输入法：Ctrl（⌃） + 1
      - 取消勾选第二项

:::

### 桌面与程序坞

::: details 点击查看

- **系统设置 → 桌面与程序坞：**
  - 程序坞：
    - 大小：中间偏小一些
    - 放大：「小」和「大」中间偏大一点点
    - 将窗口最小化至应用程序图标：打开
    - 自动隐藏和显示程序坞：打开
    - 在程序坞中显示最近使用的应用程序：关闭
  - 窗口与 App：
    - 默认网页浏览器：Edge（[软件配置](https://kendrick-song.github.io/my-blog/环境搭建/从零开始配置一台工作电脑-Mac.html#浏览器)中会介绍浏览器相关配置）

:::

### 通用

::: details 点击查看

- **系统设置 → 通用：**
  - 登录项：
    - 关闭不必要的程序

:::

### 声音

::: details 点击查看

- **系统设置 → 声音：**
  - 启动时播放声音：关闭

:::

### 外观

::: details 点击查看

- **系统设置 → 外观：**
  - 外观：自动

:::

### 屏幕使用时间

::: details 点击查看

- **系统设置 → 屏幕使用时间：**
  - 屏幕使用时间：关闭

:::

### 访达

::: details 点击查看

- **访达 → 设置...：**
  - 通用：
    - 开启新「访达」窗口时打开：文稿
  - 边栏：
    - 调整边栏的显示项目
  - 高级：
    - 显示所有文件扩展名：打开
    - 30 天后溢出废纸篓中的项目：打开
    - 执行搜索时：搜索当前文件夹
- **访达 → 显示：**
  - 显示标签页栏
  - 显示路径栏

:::

## 软件配置

### 浏览器

> 个人主力使用的浏览器是微软的 **Edge 浏览器**，如果要换的话迁移成本也比较高，Safari 个人使用不来。

[官网](https://www.microsoft.com/zh-cn/edge/download) 下载安装，注意根据芯片选择版本。

登录微软账户，同步浏览器相关数据，并做以下设置：

- 打开垂直标签页
- 固定收藏夹和集锦
- 设置
  - 隐私、搜索和服务
    - 地址栏中使用的搜索引擎：Google
- 扩展
  - Infinity 新标签页：登录账户以同步设置
  - AdBlock
  - Google 翻译

### 搜狗输入法

[搜狗输入法-首页 (sogou.com)](https://shurufa.sogou.com/) 下载安装，登录账户以同步设置。

### Magnet - 窗口管理工具

[App Store 下载 (opens new window)](https://apps.apple.com/app/id441258766?mt=12)。付费软件，需要登录 Apple ID 账户。

### Bartender - 任务栏管理工具

非官网下载，并做以下设置。

- 通用：
  - 登录时启动：勾选
  - 当鼠标指针滑动到菜单栏…：取消

### CopyLess 2 - 剪贴板管理工具

[App Store 下载 (opens new window)](https://apps.apple.com/us/app/copyless-2-clipboard-manager/id993841014?mt=12)。

### AltTab - 窗口切换工具

[官网下载 (opens new window)](https://alt-tab-macos.netlify.app/)。

### Peek - 预览工具

[App Store 下载 (opens new window)](https://apps.apple.com/us/app/peek-a-quick-look-extension/id1554235898?mt=12)。

## 开发环境配置

### Homebrew

macOS 的软件包管理器，[官网](https://brew.sh/) 有安装指南。在安装过程中会自动安装 Xcode 命令行工具。

::: tip 提示

如果安装时出现连接错误等类似错误，可以通过科学上网或更换镜像源来解决。

安装完成后根据终端输出提示将 `brew` 添加到环境变量中，并运行 `brew help` 验证是否成功。

:::

#### Git

1. 安装 Git

   ```sh
   $ brew install git
   ```

1. 配置用户信息

   ```sh
   $ git config --global user.name "Kendrick Song"
   $ git config --global user.email "xxxx@xxx.com"
   ```

### 编辑器

[官网](https://code.visualstudio.com/download) 下载 VS Code并安装。

安装完成后同步设置：左下角 accounts → Turn on Settings Sync…，取消勾选 Extensions 后登录并同步，具体参考自 [VSCode官方的配置同步方案 - 掘金 (juejin.cn)](https://juejin.cn/post/7066622158184644621)。

添加命令行指令：在 VS Code 中运行 `Command + Shift + P` 打开命令提示，输入 `shell`，选择 Install…

安装必备扩展：

- one dark pro

### 终端配置

#### Zsh

可以通过以下命令查看当前 `shell`：

```bash
$ echo $SHELL
/bin/zsh
```

默认情况下为 `Zsh`，如果不是的话可以通过 Homebrew 来安装：

```bash
$ brew install zsh
```

如果当前 shell 不是 `Zsh`，运行下列指令：

```bash
$ chsh -s /bin/zsh
```

#### Oh My Zsh

[官网](https://ohmyz.sh/) 配置安装。

- 主题配置

  修改 `~/.zshrc` 中的以下配置：

  ```sh
  ZSH_THEME="ys"
  ```

- 插件配置

  - 安装 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)，注意需要使用 *With a plugin manager* 方式安装
  - 安装 [zsh-autosuggestions ](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md)，注意需要使用 *Oh My Zsh* 方式安装
  - 安装 colored-man-pages，直接在 `~/.zshrc` 中添加即可

#### iTerm 2

[官网](https://iterm2.com/downloads.html) 下载安装。

### Starship

[Starship: Cross-Shell Prompt](https://starship.rs/) 是一个一站式终端配置方案，[快速安装](https://starship.rs/#quick-install)。

#### 前置要求

- 安装并在终端启用 [Nerd Font](https://www.nerdfonts.com/)字体（如 [Fira Code Nerd Font](https://www.nerdfonts.com/font-downloads)）。

#### 步骤 1. 安装 Starship

```bash
$ brew install starship
```

#### 步骤 2. 设置终端以使用 Starship

安装完成后，在 `~/.zshrc` 的最后，添加以下内容：

```sh
# Starship
eval "$(starship init zsh)"
alias explain="starship explain"
```

以后如果想知道状态栏中各个图标的含义，运行 `explain` 即可。

#### 步骤 3. 配置 iTerm2

- Settings:
  - Appearance:
    - General:
      - Theme: Minimal
      - Status bar location: Bottom
  - Profiles:
    - Add a new Profile and Name it 'Starship'
    - Other Actions…: set as default
    - Colors:
      - Color Presets…: [Snazzy](https://github.com/sindresorhus/iterm2-snazzy)
    - Text:
      - Font: FiraCode Nerd Font Mono
    - Session:
      - Status bar enabled
      - Configure Status Bar > Auto-Rainbow: Automatic
  - Keys:
    - Key Mappings:
      - Keyboard Shortcut: ⌥ + ←
        - Action: Send Escape Sequence
        - Esc + b
      - Keyboard Shortcut: ⌥ + →
        - Action: Send Escape Sequence
        - Esc + f

### JDK

[Java Downloads | Oracle](https://www.oracle.com/java/technologies/downloads/)选择 Java 8 版本下载安装。

### IDEA

下载安装。

设置调整：

- 字体大小：16

必备插件：

- One Dark theme
- Rainbow Brackets