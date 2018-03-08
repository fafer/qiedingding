# 小程序说明

> src目录是存放项目源码，dist目录是打包编译生成的代码

> src/components目录存放公共组件代码

> src/pages目录存放页面代码

> src/utils目录存放一些公共API

> 根据自身业务需求，可以在src目录下创建其他目录

### 相关指令

1.初始化

```
npm install wepy-cli -g
npm install
```

2.编译

```
npm run build
```

3.开发模式

```
npm run dev
```

### 注意事项

1.使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2.微信开发者工具-->项目-->关闭ES6转ES5。 

3.微信开发者工具-->项目-->关闭上传代码时样式自动补全。

4.微信开发者工具-->项目-->关闭代码压缩上传。

项目基于wepy开发，参考文档：https://tencent.github.io/wepy/document.html