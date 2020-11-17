### bug1

```
监听 chartData 的值，当它由空转变时就会触发，这时候就能取到了，拿到值后要做的处理方法也需要在 watch 里面执行。

//总结
出现这种情况的原因, 因为父组件中的要就要传递的  props  属性 是通过 发生ajax请求回来的, 请求的这个过程是需要时间的，但是子组件的渲染要快于ajax请求过程，所以此时  created 、 mounted  这样的只会执行一次的生命周期钩子，已经执行了，但是 props 还没有流进来（子组件），所以只能拿到默认值。
```

`git rm -r --cached .` 加入`git`忽略的文件
`https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router`

#### VUE DEMO 需要完成的几个节点

1. 常见的几个框架的使用 `elementUI ， iview，museui，mintui，vux，vantui`
2. 抽离目录结构`scss`, 使用变量`$blue`， 函数2`@minin`
3. 全局的过滤器注册，指令 注册，(组件也是指令)
4. 路由模块`router`抽离，`vuex`模块抽离 
5. 常见工具函数的抽离，`utils`文件夹的组成，`auth，validate`等模块
6. jquery 插件相关的引用   

### 目前项目准备（动态路由相关）

1. vue 结合 eslint，prettier，eslint-loader 等 11 配置创建 一个项目 1 
2. 搭建项目权限所需要的基本路由规则和页面的书写
3. 修改页面整合动态路由`addRouter`，让左侧的菜单栏根据不同的角色动态发生变化

4. 项目创建过程

   ```
   vue create hello 创建对话框选择
   eslint + Airbnb
   eslint + Standard
   eslint + Prettier
   上面的都是我们写代码的规范
   Airbnb---eslint-config-airbnb
   	--最流行的 JavaScript代码规范
   Standard --- eslint-config-standard
   	--NPM, Github等公司在使用standard代码规范
   Google --- eslint-config-google
   	--Google程序员写代码的风格

   as a preset for future projects  是否作为一个默认配置
   save preset as
   ```

```
https://blog.csdn.net/qq_35430000/article/details/96481708
vue里面的 vue.use  和 prototype的区别
```



### 项目概述

1. 给学校做的一个系统，可供学校的各种人员登录， 例如校长，年级主任，班主任，任课老师，学生登录； 各个人员的角色名称可以自定义配置， 校长拥有最大权限；根据职位不同，权限依次递减。有页面  级别的权限也有按钮级别的权限
2. 布局组件化 项目
3. 动态路由 addRoutes, tt$router.options
4. beforeEach
5. token
6. `mockjs.com`
7. template 的作用是模板占位符，可帮助我们包裹元素，但在循环过程当中，template 不会被渲染到页面上
8. vue递归树形组件

```
cordova create MyApp
cordova platform add android
cordova build android

基于Gradle来编译、打包android

cordova build android

cordova serve android
		http://localhost:8000/android/www/index.html
      
1. 环境安装：
npm install -g cordova
cordova platform add android/ios/browser

cordova build android --release
2. 生成签名文件  
keytool -genkey -v -keystore my.keystore -alias demo -keyalg RSA -keysize 2048 -validity 10000

keytool -genkey -alias "ljl" -keyalg "RSA" -keystore "C:\Users\ljl\ljl.keystore" -dname "CN=localhost,OU=localhost,O=localhost,L=HB,ST=HB,C=CN" -keypass "123456" -storepass "123456" -validity "36500"
keyalg  秘钥的算法
keystore  生成的证书存放位置
keypass  私钥的密码
validity  有效期,单位是天数

2.2 证书信息查看
keytool -list  -v -keystore C:\Users\ljl\ljl.keystore -storepass 123456

签名
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\Users\ljl\ljl.keystore app-release-unsigned.apk ljl


vue add cordova
npm run cordova-prepare
npm run cordova-build-android
```



### 前端优化

##### TTFB

1. 网页前端性能的朋友，在优化网页性能的时候都会遇到网站加载 **Waiting（TTFB）时间过长**的问题
2. TTFB 是 Time to First Byte 的缩写，指的是浏览器开始收到服务器响应数据的时间（后台处理时间+重定向时间），是反映服务端响应速度的重要指标.就像你问朋友了一个问题，你的朋友思考了一会儿才给你答案，你朋友思考的时间就相当于 TTFB。你朋友思考的时间越短，就说明你朋友越聪明或者对你的问题越熟悉。对服务器来说，TTFB 时间越短，就说明服务器响应越快。
3. 如果想知道你的[服务器优化](https://www.wpzhiku.com/tag/%E4%BC%98%E5%8C%96/)可以到什么程度，大家可以上传一些静态的 HTML 页面到服务器
   1. 可以使用一个 [CDN](https://www.wpzhiku.com/wp-cdn-rewrite-qiniu-colud/)，把页面同步到离用户比较近的 CDN 节点上，也是一个不错的解决办法
   2. 如果是 Cookie 的原因，可以通过修改应用程序，删除一些不必要的 Cookie，或者精简 Cookie 内容，缩短 Cookie 的有效期等，都是解决办法。
   3. 本站使用的是 [Cachify 插件 Memcached 缓存方式](https://www.wpzhiku.com/cachify/)，直接把用户请求过的页面，缓存到了内存中，网站加载 Waiting (TTFB) 时间达到了 50 ms 左右
   4. 用更多、更好的服务器，还可读减少对数据的查询——即缓存数据结果
4. 使用http_load压力测试， `./http_load -rate 5 -seconds 10 urls`，在当前目录下再新建一个url文件，里面放我们的url地址，或者ip地址



### 日历相关

1. 当前月的 年月日的获取
2. 当前月有多少行， 由具体到抽象
3. 当前月的日历 数组对象，有上一月，当前月，下一月的数据组成