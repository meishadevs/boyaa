# 博雅互动首页

## **以循序渐进的方式实现博雅互动首页效果，通过这个项目可以将很好的练习HTML、CSS、JavaScript、jQuery和Less的使用**
**1. 博雅互动首页：** 只用HTML和CSS实现了博雅互动首页的布局  
**2. 博雅互动首页(js版)：** 在完成了网页布局的基础上使用原生js实现了导航菜单切换、图片轮播、回到顶部等效果  
**3. 博雅互动首页(jQuery版)：** 在完成了网页布局的基础上使用jQuery实现了导航菜单切换、图片轮播、回到顶部等效果  
**4.博雅互动首页(Less版)：** 使用Less重写了一遍博雅互动首页的CSS样式

## **网站地址**
**博雅互动首页**
[https://meishadevs.github.io/boyaa/博雅互动首页/index.html](https://meishadevs.github.io/boyaa/博雅互动首页/index.html)

**博雅互动首页(js版)** 
[https://meishadevs.github.io/boyaa/博雅互动首页(js版)/index.html](https://meishadevs.github.io/boyaa/博雅互动首页(js版)/index.html)

**博雅互动首页(jQuery版)**  
[https://meishadevs.github.io/boyaa/博雅互动首页(jQuery版)/index.html](https://meishadevs.github.io/boyaa/博雅互动首页(jQuery版)/index.html)

# 使用Less版的博雅互动首页

**1. 将博雅首页项目clone到本地**  
在命令行中执行`git clone https://github.com/meishaxiaozi/boyaa.git`命令将博雅首页项目clone到本地  

**2. 安装Less编译插件**  
```
npm install -g less
```

**3. Less版博雅互动首页的目录结构**  
进入博雅互动(Less版)文件夹，可以看到Less版的博雅互动首页的目录结构如下

    ├───  博雅互动首页(Less版)/········· 网站所在目录
	└─┬─  css/ ······················· 存放网站的CSS文件
	  ├─  images/ ···················· 存放网站的图片文件
	  ├─  js/ ························ 存放网站的js脚本
	  ├─  less/ ······················ 存放网站的Less文件
	  ├─  favicon.ico ················ 网站的图标
	  └─  index.html ················· 网站的入口文件

**3. 进入less文件夹中**
进入less文件夹下，可以看到less文件夹结构

    ├───  less/······················· less文件夹
	└─┬─  common/ ···················· 存放公共部分的Less文件
	  ├─  index/ ····················· 存放博雅首页的Less文件
	  ├─  common.less ················ 公共Less文件
	  ├─  reset.less ················· 重置网站样式的Less文件
	  └─  index.less ················· 网站首页的Less文件

**4. 将Less文件编译成CSS样式文件**  
打开命令行，进入项目目录下的less文件夹中，执行下面的命令可以编译reset.less文件，并且会将生成的reset.css文件储存在项目目录下的css文件夹中  
```
lessc reset.less > ../css/reset.css
```

将common.less编程成common.css  
```
lessc common.less > ../css/common.css
```

将index.less编译成index.css  
```
lessc index.less > ../css/index.css
```
最后打开css文件夹，可以看到reset.less编译成了reset.css、common.less编译成了common.css、index.less编译成了index.css
![](project.png)




