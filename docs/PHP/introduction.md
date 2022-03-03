---
title: 初识PHP
date: 2022-2-26

categories: 
 - PHP
tags: 
 - PHP
---

## 一. 认识web应用程序

1. web应用程序工作原理
2. web应用程序客户端技术：HTML/XHML、XML、CSS、客户端脚本语言（JavaScript、VBScript等）。
3. web服务器：Apache、IIS(windows)、Nginx、Tomcat
4. 数据库服务器、数据库管理系统：MYSQL、SQLServer、Oracle等
5. web服务器端变成技术：PHP、ASP.NET、JSP等

## 二. 课程学习内容

php基础语法、数组、字符串、函数、面向对象、文件和目录操作、form表单、 会话、 Ajax技术、 php操作数据库、综合案例。

## 三. php开发环境介绍

WAMP：Windows、Apache、MySQL、PHP

LAMP：Linux、Apache、MySQL、PHP

## 四.php的标记

<?php  php代码?>

::: tip 提示

在纯php文件中，?>可省略。

但在html文件嵌套php语言时，?>必须要加上。

::: 

## 五. 输出语句(echo)

echo  要输出的内容;

echo "hello php";

## 六. 默认地址

localhost => 172.0.0.1

网页默认端口：80

数据库默认端口：3306

## 七. 通过域名访问网页

<a data-fancybox title="QQ截图20220226132455" href="https://markdown123.oss-cn-beijing.aliyuncs.com/img/QQ%E6%88%AA%E5%9B%BE20220226132455.png">![QQ截图20220226132455](https://markdown123.oss-cn-beijing.aliyuncs.com/img/QQ%E6%88%AA%E5%9B%BE20220226132455.png)</a>

填写域名，将根目录设置为自己的php文件夹，打开浏览器，输入自己填写的域名即可访问。

::: tip 提示

网站会默认执行index.html。如果存在index.html和index.php，则默认执行index.php。

:::

## 作业

实现下面图片的效果

<a data-fancybox title="QQ截图20220226132842" href="https://markdown123.oss-cn-beijing.aliyuncs.com/img/QQ%E6%88%AA%E5%9B%BE20220226132842.png">![QQ截图20220226132842](https://markdown123.oss-cn-beijing.aliyuncs.com/img/QQ%E6%88%AA%E5%9B%BE20220226132842.png)</a>

答案：

```php
<?php
echo '<center>春望<br/>';
echo '唐 杜甫<br/>';
echo '国破山河在，城春草木深。<br/>';
echo '感时花溅泪，恨别鸟惊心。<br/>';
echo '烽火连三月，家书抵万金。<br/>';
echo '白头搔更短，浑欲不胜簪。</center>';
```





