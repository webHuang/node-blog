# 用 node 搭建个人博客（五）：数据库
#### 为了更加底层的学习 `mongodb`，所以没有使用 `mongoose` 模块，如果有需要，可以加上，节省代码，更加优雅。

因为没有注册功能，所以在使用前需要先把用户信息添加到数据库。

打开 `mongod.exe`，再打开 `mongo.exe`，在 `mongo.exe` 打开的命令行进行如下操作：

创建数据库
```js
use blog
```
创建 user 集合，用来保存用户信息
```js
db.createCollection('userCollection')
```
添加用户信息
```js
db.user.insert({
    user: 'admin', // 用户名 随意填写
    password: 'admin', // 密码 随意填写
    visits: 0, // 博客访问次数 每次刷新网站 自增1
    token: '', // 用户登录创建 token 后，保存在这
})
```
用来保存文章数据的表/集合为 `myBlogArticles`, 这个也是自己命名的，可以在代码中自己修改。

注意：在 `windows` 中安装数据库，一定要按照[教程](https://www.runoob.com/mongodb/mongodb-window-install.html)安装。

## 项目相关文档
* [多个请求下 loading 的展示与关闭](https://github.com/woai3c/Front-end-articles/blob/master/control%20loading.md)
* [Vue 实现前进刷新，后退不刷新的效果](https://github.com/woai3c/Front-end-articles/blob/master/vue%20refresh.md)
* [Vue 页面权限控制和登陆验证](https://github.com/woai3c/Front-end-articles/blob/master/authentication.md)
* [用 node 搭建个人博客（一）：代码热更新](https://github.com/woai3c/node-blog/blob/master/doc/node-blog1.md)
* [用 node 搭建个人博客（二）：导出模块同时兼容 import 和 require](https://github.com/woai3c/node-blog/blob/master/doc/node-blog2.md)
* [用 node 搭建个人博客（三）：token](https://github.com/woai3c/node-blog/blob/master/doc/node-blog3.md)
* [用 node 搭建个人博客（四）：评论功能](https://github.com/woai3c/node-blog/blob/master/doc/node-blog4.md)
