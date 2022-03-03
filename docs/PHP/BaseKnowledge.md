---
title: 基础知识
date: 2022-3-3

categories: 
 - PHP
tags: 
 - PHP
---

## 网页报错

- 5开头的错误：服务器错误（502）
- 4开头的错误：没有找到文件（402、403）

## 一、代码规范

php标记：<?php  ?>

在纯php文件中 ?>可省略，但在嵌入HTML代码中 ?>不能省略。

有php代码的文件后缀必须是.php

### 1. php代码标识

- <?=表达式?>
- <?php ……?>
- <? …… ?>
- ASP风格的格式<%……%>
- 标准脚本格式：<script> language="php"……</script>

### 2. php注释

1. 单行注释：//或#   快捷键：ctrl + /
2. 多行注释： /*  */  快捷键：ctrl + shift + /

### 3.php文件包含

1. include "文件名"
2. include ("文件名")
3. require "文件名"
4. require ("文件名")

include和require的区别：

- include在报错的时候，后面的代码还会继续执行。
- require在报错的时候，后面的代码不会继续执行。

解决重复包含问题：include_once或require_once：在包含文件的时候会多一步检测，当检测到前面已经包含过的时候，会不包含。

## 二、常量

### 1. define(name, value, case_insensitive)

参数1：常量名（string）

参数2：常量值

参数3：是否区分大小写

- true：不区分大小写
- false：区分大小写

参数3已被弃用，不推荐使用。

```php
define("PI", 3.14);

echo PI;   
```



常量在定义的时候需要加引号，但在调用的时候不需要加引号。

### 2.const：const 常量名 = 常量值

```php
const PI = 3.14;

echo PI;  //输出3.14
```



### 3.系统常量

\_\_FILE\_\_：文件路径

echo "main文件路径：". \_\_FILE\_\_；

### 4.echo的分隔符：

. ：字符串的拼接

, :  连续输出

## 三、变量

### 1. 变量的命名规则

1. 变量的名称的首字母必须是$符号（即美元符号）。
2. 变量名称中可以包含下划线、字面和数字，但数字不能作为开头
3. 变量名称区分大小写。

### 2.变量的赋值和使用

1. 传值赋值：直接将数据变量的值复制放到变量内内存中

```php
$x = 25;

$y = $x;

结果：$x = $y = 25;
```



2. 传址操作： 将变量的地址传递给另一个变量，使两个变量具有相同的内存地址。因为两个变量的内存地址相同，所以这两个变量相当于同一个内存的不同名字。给一个变量赋值时，另一个变量的值也发送变化。

​		在变量名称之前使用$符号，即可获得的地址。

```php
$x = 25;

$y = &$x;

$y = 'abcd';
```

3. 改变变量名称

​		在变量名称前面加一个“$”符号，即可将变量的值作为变量名称

```php
$abc = 100;

$xname = "abc";

echo $$xname;   //输出100
```

4. 查看变量的类型

   var_dump()函数

```php
var_dump(变量名);
$str = "我是一个字符串";
var_dumm($arr);  //输出：string(21) "我是一个字符串"
```

功能：输出变量的基本信息（值和数据类型）

​	gettype()函数

```php
gettype(变量名);
$str = "我是一个字符串";
echo gettype($str);	//输出string
```

::: tip 单引号和双引号的区别

- 双引号会将引号里的$符号解析成变量

```php
$n = 12;
echo "变量$n的值：$n";  //输出：变量12的值：12
```

- 而单引号不会将引号里的$符号解析成变量

```php
echo '变量$n的值：'. $n;
```



:::

## 四、数据类型转换

### 1. 自动类型转换：系统根据需求自己判定

### 2. 强制（手动类型转换）

```php
(变量类型)变量名：(int)$a;

settype(变量名, 变量类型)：settype($a, int);
```

settype与(变量类型)变量名的区别：

- (变量类型)变量名类型转换时，不会改变本身的数据类型
- settype类型转换时，会改变自身的数据类型

## 五、 类型转换函数

1. intval(变量名);   	//将变量转换为整型
2. floatval(变量名);   //将变量转换为浮点型
3. strval(变量名);      //将变量转换为字符型

## 六、判断数据类型函数

1. is_int(变量名);	//判断是否为int类型
2. is_float(变量名);  //判断是否为float类型
3. is_string(变量名);  //判断是否为string类型
4. is_array(变量名);  //判断是否为array类型

## 七、数组

### 1. 定义：

$arr = array(key1=>value1, key2=>value2, ... );

key可省略

### 2. 输出：

echo $arr[key1];

print_r函数：只会输出变量值，多用于输出数组

```php
$arr = array("one", "two", "three");
print_r($arr);  //Array ( [0] => one [1] => two [2] => three ) 
```

### 3. foreach遍历数组

格式1：

```php
foreach($arr as $val)
{
    echo $val;
}
```

格式2：

```php
foreach($arr as $key => $val)
{
    echo $arr[$key];
}
```

## 八、类

### 1. 定义

```php
class student {
    public $name;
    function set_name($name) {
        $this.$name = $name;
    }
}
```

### 2. 实例化

```php
$stu1 = new student();   //new关键字   调用构造函数
```

### 3. 调用

```php
$stu1->set_name("杨凯");
echo $stu1->$name;
```

## 九、 作业

### 1. 趣味数学


<a data-fancybox title="image-20220303150447711" href="https://markdown123.oss-cn-beijing.aliyuncs.com/img/image-20220303150447711.png">![image-20220303150447711](https://markdown123.oss-cn-beijing.aliyuncs.com/img/image-20220303150447711.png)</a>

代码：

```php
$chengshu = 0;
for($i = 1; $i <= 9;$i++)
{
    $chengshu = $chengshu * 10  + $i;
    echo "<center>";
    echo "$chengshu * 8 + $i = ", $chengshu * 8 + $i, "<br/>";
    echo "</center>";
}
```



### 2. 99乘法表

<a data-fancybox title="image-20220303150246948" href="https://markdown123.oss-cn-beijing.aliyuncs.com/img/image-20220303150246948.png">![image-20220303150246948](https://markdown123.oss-cn-beijing.aliyuncs.com/img/image-20220303150246948.png)</a>

代码：

```php
echo "<table border='1px'>";
for($i = 1;$i <= 9; $i++)
{
    echo "<tr>";
    for($j = 1;$j <= 9; $j++)
    {
        if($j <= $i)
        {
            echo "<td>$i*$j=".$i*$j."</td>";
        }

    }
    echo "</tr>";
}
echo "</table>";
```

