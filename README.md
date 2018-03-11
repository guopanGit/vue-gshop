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
this   ☞   组件对象

$router   ☞   路由器对象

$route   ☞   当前路由器

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
## 异步显示轮播图:
    1. 通过vuex获取foodTypes数组(发请求, 读取)
    2. 对数据进行整合计算(一维变为特定的二维数组)
    3. 使用Swiper显示轮播, 如何在界面更新之后创建Swiper对象?
        1). 使用回调+$nextTick()
        2). 使用watch+$nextTick()
## 1. 重要问题
    * 如何查看你的应用是否发送某个ajax请求?
        浏览器的network
    * 发ajax请求404
        请求的路径的对
        代理是否生效(配置和重启)
        服务器应用是否运行
    * 后台返回了数据, 但页面没有显示?
        vuex中是否有
        组件中是否读取
