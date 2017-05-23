# 博雅互动首页
> 以循序渐进的方式实现博雅互动首页效果，通过这个项目可以将很好的练习HTML、CSS、JavaScript、jQuery、Less以及Gulp的使用

## 网站描述
**1. 博雅互动首页：** 只用HTML和CSS实现了博雅互动首页的布局  
**2. 博雅互动首页(js版)：** 在完成了网页布局的基础上使用原生js实现了导航菜单切换、图片轮播、回到顶部等效果  
**3. 博雅互动首页(jQuery版)：** 在完成了网页布局的基础上使用jQuery实现了导航菜单切换、图片轮播、回到顶部等效果  
**4.博雅互动首页(Less版)：** 将博雅互动首页的CSS改成了Less
**5.博雅互动首页（Gulp版）：** 使用Gulp实现了一个简单的自动化的前端开发框架 

## **网站地址**
**博雅互动首页**
[https://meishadevs.github.io/boyaa/博雅互动首页/index.html](https://meishadevs.github.io/boyaa/博雅互动首页/index.html)

**博雅互动首页(js版)** 
[https://meishadevs.github.io/boyaa/博雅互动首页(js版)/index.html](https://meishadevs.github.io/boyaa/博雅互动首页(js版)/index.html)

**博雅互动首页(jQuery版)**
[https://meishadevs.github.io/boyaa/博雅互动首页(jQuery版)/index.html](https://meishadevs.github.io/boyaa/博雅互动首页(jQuery版)/index.html)

## 使用Less版的博雅互动首页

**1. 将博雅首页项目clone到本地**  

	git clone https://github.com/meishaxiaozi/boyaa.git

**2. 安装Less编译插件**  

	npm install -g less

**3. Less版博雅互动首页的目录结构**  
进入博雅互动(Less版)文件夹，可以看到Less版的博雅互动首页的目录结构如下

	├───  博雅互动首页(Less版)/········· 网站所在目录
	└─┬─  css/ ······················· 存放网站的CSS文件
	  ├─  images/ ···················· 存放网站的图片文件
	  ├─  js/ ························ 存放网站的js脚本
	  ├─  less/ ······················ 存放网站的Less文件
	  ├─  favicon.ico ················ 网站的图标
	  └─  index.html ················· 网站的入口文件

**4. 进入less文件夹中**
进入less文件夹下，可以看到less文件夹结构

    ├───  less/······················· less文件夹
	└─┬─  common/ ···················· 存放公共部分的Less文件
	  ├─  index/ ····················· 存放博雅首页的Less文件
	  ├─  common.less ················ 公共Less文件
	  ├─  reset.less ················· 重置网站样式的Less文件
	  └─  index.less ················· 网站首页的Less文件

**5. 将Less文件编译成CSS样式文件**  
打开命令行，进入项目目录下的less文件夹中，执行下面的命令可以编译reset.less文件，并且会将生成的reset.css文件储存在项目目录下的css文件夹中  

	lessc reset.less > ../css/reset.css

将common.less编程成common.css  

	lessc common.less > ../css/common.css

将index.less编译成index.css  

	lessc index.less > ../css/index.css

最后打开css文件夹，可以看到reset.less编译成了reset.css、common.less编译成了common.css、index.less编译成了index.css 
![这里写图片描述](http://img.blog.csdn.net/20170416223447496)

## 使用Gulp将博雅互动首页的Less文件编译成CSS文件
这个项目中有3个Less文件需要编译成CSS文件，使用前面方法需要执行3次Less编译命令才能将3个Less文件编译成CSS文件，这里将介绍使用前端自动化工具Gulp将Less文件编译成CSS文件，只需要执行一次Less编译命令，可以提高开发效率  

**1.进入博雅互动首页(Less版)目录下**  

	cd 博雅互动首页(Less版)

**2.创建package.json文件**
在命令行中执行`npm init`命令的时候会要求用户输入name、version等值，当不清楚这些值的含义的时候，一直按回车键，会自动使用默认值

	npm init

**3.安装Gulp**  

	npm install gulp

**4.安装Less编译插件**  

	npm install gulp-less --save-dev

**5.创建一个Gulp的主文件gulpfile.js，并且在gulpfile.js中添加下面的代码**

	//载入gulp模块
	var gulp = require('gulp');
	var less = require('gulp-less');
	
	//创建一个Less编译任务
	gulp.task('less', function() {
	
		//获得less目录下Less文件
		gulp.src('./less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./css/'));
	});

**6.在命令行中执行Less编译成CSS的命令**  

	gulp less

**7.打开css文件夹可以看到，在css文件夹下生成了三个CSS文件，表示成功的实现了使用Gulp将Less编译成CSS**  
![这里写图片描述](http://img.blog.csdn.net/20170416223447496)

## 使用Gulp制作一个简单的前端工作流

**1.进入博雅互动首页(Gulp版)目录下**

	cd 博雅互动首页(Gulp版)

**2.博雅互动首页(Gulp版)目录结构**

	├───  博雅互动首页(Gulp版)/········· 网站所在目录
	└─┬─  src/ ······················· 存放网站原文件
	  ├─  .gitignore ················· 提交到Git上时忽略提交的文件
	  └─  package.json ··············· 文件中记录了当前项目的信息

**3.安装项目所需的插件**

	npm install

**4.创建一个gulpfile.js文件，并且向gulpfile.js中添加下面的代码**

	//导包
	var gulp = require('gulp');
	var less = require('gulp-less');
	var cssnano = require('gulp-cssnano');
	var concat = require('gulp-concat');
	var uglify = require('gulp-uglify');
	var htmlmin = require('gulp-htmlmin');
	var browserSync = require('browser-sync');
	
	//Less编译、CSS压缩
	gulp.task('style', function() {
	  gulp.src('src/less/*.less')
	    .pipe(less())
	    .pipe(cssnano())
	    .pipe(gulp.dest('dist/css'))
	    .pipe(browserSync.reload({
	      stream: true
	    }));
	});
	
	
	//JS压缩
	gulp.task('script', function() {
	  gulp.src('src/js/*.js')
	    .pipe(uglify())
	    .pipe(gulp.dest('dist/js'))
	    .pipe(browserSync.reload({
	      stream: true
	    }));
	});
	
	
	//图片复制
	gulp.task('image', function() {
	  gulp.src('src/images/*.*')
	    .pipe(gulp.dest('dist/images'))
	    .pipe(browserSync.reload({
	      stream: true
	    }));
	});
	
	
	//icon复制
	gulp.task('icon', function () {
	  gulp.src('src/*.ico')
	      .pipe(gulp.dest('dist'))
	      .pipe(browserSync.reload({
	          stream: true
	      }));
	});
	
	
	//html压缩
	gulp.task('html', function() {
	  gulp.src('src/*.html')
	    .pipe(htmlmin({
	      collapseWhitespace: true,
	      removeComments: true
	    }))
	    .pipe(gulp.dest('dist'))
	    .pipe(browserSync.reload({
	      stream: true
	    }));
	});
	
	
	gulp.task('serve', function() {
	  browserSync({
	    server: {
	      baseDir: ['dist']
	    },
	  }, function(err, bs) {
	    console.log(bs.options.getIn(["urls", "local"]));
	  });
	
	  gulp.watch(['src/less/*.less', 'src/less/common/*.less', 'src/less/index/*.less'], ['style']);
	  gulp.watch('src/js/*.js',['script']);
	  gulp.watch('src/images/*.*',['image']);
	    gulp.watch('src/*.ico',['icon']);
	  gulp.watch('src/*.html',['html']);
	});
	
	gulp.task('default', ['style', 'script', 'image', 'icon', 'html']);

**5.编译src下的文件**

	gulp default
	
在命令行中执行`gulp default`命令后会做Less文件的编译、CSS文件的压缩、HTML文件的压缩等操作，并且会自动创建一个dist文件夹，用于保存编译后生成的网页文件

**6.在命令行中执行下面的命令实现自动化编译**

	gulp serve

在命令行中执行完`gulp serve`命令后，会使用默认浏览器打开当前网页，此时修改src文件夹下的文件，只要一保存，文件就会被编译，并且将编译生成的文件存放在dist文件夹下

**修改Less文件，自动编译的效果**  
下面的gif动画展示的是修改header.less文件下的`background-color`属性，修改完保存后会自动将Less文件编译成CSS文件，并且会立即在网页中展示
![这里写图片描述](http://oqdyj5870.bkt.clouddn.com/test.gif)
