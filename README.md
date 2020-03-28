# bug1

```
监听 chartData 的值，当它由空转变时就会触发，这时候就能取到了，拿到值后要做的处理方法也需要在 watch 里面执行。

//总结
出现这种情况的原因, 因为父组件中的要就要传递的  props  属性 是通过 发生ajax请求回来的, 请求的这个过程是需要时间的，但是子组件的渲染要快于ajax请求过程，所以此时  created 、 mounted  这样的只会执行一次的生命周期钩子，已经执行了，但是 props 还没有流进来（子组件），所以只能拿到默认值。
```

`git rm -r --cached .` 加入`git`忽略的文件
`https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router`

#### VUE DEMO 需要完成的几个节点

1. 常见的几个框架的使用 `elementUI， iview，museui，mintui，vux，vantui`
2. 抽离目录结构`scss`, 使用变量`$blue`， 函数2`@minin`
3. 全局的过滤器注册，指令 注册，(组件也是指令)
4. 路由模块`router`抽离，`vuex`模块抽离 
5. 常见工具函数的抽离，`utils`文件夹的组成，`auth，validate`等模块
6. jquery 插件相关的引用   

### 目前项目准备（动态路由相关）

1. vue 结合 eslint，prettier，eslint-loader 等 11 配置创建 一个项目  
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

### 项目概述

1. 给学校做的一个系统，可供学校的各种人员登录， 例如校长，年级主任，班主任，任课老师，学生登录； 各个人员的角色名称可以自定义配置， 校长拥有最大权限；根据职位不同，权限依次递减。有页面  级别的权限也有按钮级别的权限
2. 布局组件化
3. 动态路由 addRoutes, $router.options
4. beforeEach
5. token
6. `mockjs.com`
7. template 的作用是模板占位符，可帮助我们包裹元素，但在循环过程当中，template 不会被渲染到页面上
8. vue递归树形组件
