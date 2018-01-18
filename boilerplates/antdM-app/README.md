## 开始项目

#### 1.运行

```
npm start
```

#### 2.测试发布
> 1. git pull 最新代码

```
v={测试版本} npm run dist
```
> 在项目目录下生成dist文件夹，该文件夹为最终测试发布代码

#### 3.生产发布
> 1. git pull 最新代码
> 2. 修改wci.json文件prod下的api为生产环境api地址

```
npm run dist
```
> 在项目目录下生成dist文件夹，该文件夹为最终生产发布代码
