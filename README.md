# wci-cli
<img src="http://7xr3o7.com1.z0.glb.clouddn.com/wci_logo.png" width="120px" />

## wci-cli
基于wci-build的项目构建脚手架，一行命令生成三种项目（antd项目、antd-mobile项目、纯净的react项目）

> 什么是wci-build？
> 基于react16、react-router4、redux的webpack构建工具，开发者可以选择集成设计类开发框架（例如：antd），可用于开发大型网站、管理系统等，功能包含但不限于如下：

> * 集成最新react16、react-router4
> * 支持css预编译、模块化，集成less、postcss兼容各个版本浏览器（IE9以上）
> * 支持集成蚂蚁金服antd、antd-mobile，支持自定义样式，支持antd动态加载
> * 支持开发环境热更新、支持模块化API接口、支持mac、window双系统开发
> * 支持测试、生产代码自动添加版本号，支持代码合并、压缩，支持第三方库抽离，支持css代码抽离
> * 支持开发环境IP地址、端口可配置、后端API接口可配置
> * 支持三层eslint校验（1.开发工具娇艳 2.代码打包校验 3.git校验）

## 安装

```
npm install -g wci-cli
```

## 使用

```
$ wci new myapp
```
键入上述命令后，根据命令行提示进行项目生成：
1. Need to introduce antd? // 是否需要安装antd？
2. Select the antd type you want to install. // 选择一个antd类型（条件一为yes时）
3. Does the auto install dependency package? // 是否需要初始化依赖包？

![](http://7xr3o7.com1.z0.glb.clouddn.com/QQ20180223-180335@2x.png)

## 项目结构

```
.
├── app                    # Source directory
    ├── assets             # Store images, icons, ...
    ├── scripts            # Store js
    ├── styles             # Store global less
    ├── utils              # Utils
    ├── index.js           # Entrance to the file
    ├── index.tpl.html     # html template
├── build                  # Continuous integration
├── .babelrc               # babel config
├── .eslintrc              # Eslint config
├── .gitignore             #
├── package.json           #
└── wci.json               # Setting config
```
