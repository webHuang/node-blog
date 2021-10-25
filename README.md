# 用 node 搭建的个人开源博客
这个项目是为了学习 node 而建的，从前端到后端一手包办。相对来说，还是有一定难度的，适合有一定编程基础的人进阶学习。

如果有问题，欢迎提 [issues](https://github.com/woai3c/node-blog/issues)

注意，本项目的前后端代码都是放在一起的，前端代码放在 `client` 目录，后端代码放在 `server` 目录。


## 前端页面
* 首页(index)

  包含内容及标签子页面
  
* 编辑(editor)
* 登陆(login)
* 管理(manage)

## 使用的库、框架
### 前端
* [vue](https://cn.vuejs.org/v2/guide/)
* [vue-router](https://router.vuejs.org/zh/)
* [vuex](https://vuex.vuejs.org/zh/)
* [vue-markdown](https://github.com/miaolz123/vue-markdown)
* [iview](https://www.iviewui.com/docs/guide/install)
* [axios](https://www.kancloud.cn/yunye/axios/234845)

### 后端
* [node](https://nodejs.org/zh-cn/)
* [express](https://expressjs.com/zh-cn/)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)

### 数据库
* [mongodb](https://www.runoob.com/mongodb/mongodb-databases-documents-collections.html)

### 测试
* [mocha](https://mochajs.org/)

### 其他
* [lib-qqwry](https://github.com/cnwhy/lib-qqwry)——IP 地址转换为对应的城市名称

## 使用
#### 注意
1. **登陆入口在页面脚部的 Copyright ©2020 **
2. **博客内容、评论使用的都是 `markdown` 语法**

需要先下载 mongodb，建议按照[windows 安装教程](https://www.runoob.com/mongodb/mongodb-window-install.html)一步步安装。

* [mongodb 教程一](https://www.runoob.com/mongodb/mongodb-databases-documents-collections.html)
* [mongodb 教程二](https://www.runoob.com/nodejs/nodejs-mongodb.html)

在安装完 mongodb 后，克隆项目。
```
git clone https://github.com/woai3c/node-blog.git
```
在运行前还得进行一些准备工作：

因为没有注册功能，所以在使用前需要先把用户信息添加到数据库。

打开 `mongod.exe`，再打开 `mongo.exe`，在 `mongo.exe` 打开的命令行进行如下操作：

**创建数据库**
```
use blog
```
**创建 user 集合，用来保存用户信息**
```
db.createCollection(userCollection)
```
**添加用户信息**
```js
db.user.insert({
    user: 'admin', // 用户名 随意填写
    password: 'admin', // 密码 随意填写
    visits: 0, // 博客访问次数 每次刷新网站 自增1
    token: '', // 用户登录创建 token 后，保存在这
})
```
接下来就可以开始运行项目了。

**安装依赖**
```
npm i
```
**开发环境**（前端代码热更新，修改完即可查看效果，后端代码修改完需要重启服务）
```
npm run dev
```
**生产环境** （打包，打包过程有点长，需要等待）
```
npm run build
```
运行服务
```
npm run server
```
**测试**
```
npm run test
```
**访问地址**
```
// 生产环境
http://localhost:8888/
// 开发环境
http://localhost:8080/

```
**mangodb启动**
```
brew services restart mongodb-community@4.4
```
# node-blog
