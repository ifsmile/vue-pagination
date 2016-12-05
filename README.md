# vue-pagination

## 效果

![](https://raw.githubusercontent.com/ifsmile/img/master/vue-pagination/GIF.gif)

## 介绍

基于vue2.X版本的vue-pagination分页组件

## 使用

```bash
# 获取目录
$ git clone git git@github.com:ifsmile/vue-pagination.git

# 进入目录
$ cd vue-pagination

# 安装依赖
$ npm install

# 启动开发服务
$ npm run start

# 打包
$ webpack
```

## 目录结构

```bash
├── src/
│   ├── main.js                 # 项目入口文件
│   ├── components/             # UI 组件
│   │   └── vue-pagination.vue  # vue-pagination组件
│   ├── view/                   # 视图组件
│   │   └── index.vue 			# 挂载组件
│   
├── dist/						# 打包目录
│   └── ...
├── index.html
├── webpack.config.js           # webpack配置文件
└── package.json                # 依赖
```

## props介绍

```bash
# pageSize		每页显示数据条数
# totalResult   总共数据条数
# displayNum	分页组件中间显示页的个数
# edgeNum		分页组件两端显示页的个数
```