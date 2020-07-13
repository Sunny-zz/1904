#### git 的基本操作

#### 本地的项目已经做好了(做了一部分，项目刚开始)，向要传到 github 网站保存

##### 上传到网上非空仓库 (比如 [username].github.io)

- 先将网上的仓库下载到本地，需要使用命令 `git clone 仓库地址`
- 将想要托管的项目放到该仓库内，仓库内不必要的东西删除
- 将本地和网上关联起来(将自己本地的修改上传)
  - 将自己对仓库的所有修改添加到 github 远端记录,执行 `git add .`
  - 将记录好的修改做成版本，执行命令 `git commit -m'留言'`
    - 如果是第一次和 github 关联的话，会失败，然后会提示
      ```shell
        please tell me who you are ?
        让你依次分别执行以下命令
        git config --global user.name "yourname"
        git config --global user.email "youremail"
      ```
    - 告诉他之后再次执行 `git commit -m'留言'`
  - 将新的版本上传，执行命名 `git push`
    - 由于是第一次和网上关联，会失败提示
      ```
        让你执行
        git push -u origin master
        执行完毕之后就成功了
      ```
- 上传成功之后，想要修改的话，直接在本地仓库修改然后执行上传三部曲即可

##### 上传到网上空仓库 (我创建的 first_demo 空仓库)

- 网上传建一个项目同名(你的项目文件夹是什么名字，仓库名与之相同)空仓库(创建的时候不添加 reademe 文件)
- 在你的本地项目文件夹内打开命令行工具
- 将自己本地的项目初始化成 git 仓库，执行 `git init` 命令
- 执行 add 和 commit 命令(简写的需要自己补充)
- 去网上你的空仓库复制代码，第一个提示框的最后两行
  ```
    git remote add origin https://github.com/Sunny-zz/first_demo.git
    这行命令作用是给本地的仓库添加一个远端地址 名称叫 origin 地址是 后面的地址
    git push -u origin master
    将版本上传到已经添加的远端 origin
  ```
- 执行完毕之后上传成功，想要修改的话，直接在本地仓库修改然后执行上传三部曲即可

#### git 常用命令

- `git --version` 查看 git 版本号,有时候可以简写成 `-v`
- `git clone 仓库地址` 克隆仓库到本地
- `git add .` 将你的修改让远端记录 . 代表所有的修改 也可以换成文件名
- `git commit -m'留言'` 将记录好的修改做成版本,并提交版本留言
- `git push` 将做好的版本提交到远端
- `git init` 将本地项目变成仓库

#### 注意

- 仓库不能嵌套仓库
