# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 注意
this ☞ 组件对象

$router ☞ 路由器对象

$route ☞ 当前路由器

## 配置代理

	  proxyTable: {

 	    "/api": { // 匹配所有以 '/api'开头的请求路径

	      target: 'http://localhost:3000', // 代理目标的基础路径

        changeOrigin: true, // 支持跨域

        pathRewrite: {// 重写路径: 去掉路径中开头的'/api'

          '^/api': ''

          }
      }
    },

