---
title: 字符串的操作
date: 2022-3-17

categories: 
 - PHP
tags: 
 - PHP
---

## 自然排序

- natsort()：函数实现了一个和人们通常对字母数字字符串进行排序的方法一样的排序算法并保持原有键／值的关联，元素值从小到大，保留元素与下标对应关系，

```php
$array1 = $array2 = array("img12.png", "img10.png", "img2.png", "img1.png");
natsort($array1);
print_r($array1);
```

## 堆栈

进出只能在同一方向（先进后出）

array_push($arr, $val1, ...);

array_pop($arr);

## 队列

在一端进，另一端出（先进先出）

array_shift($arr);

array_unshift($arr, $val1, ...);

## 字符串的操作

字符串每个字符占一个字节

### 1. 将字符串作为数组访问

```php
$a = "12345";
echo $a[0]; // 输出1
$a[2] = "ab";  //只会把第一个字符赋值给$a[2]中
echo $a;  // 12a45
```

### 2. 字符串输出

- echo:  可以输出多个字符串
- print: 只可以输出一个字符串

### 3. 字符串转换函数

- chr($ascii);   将ascii码转换为字符

  ```php
  echo chr(rand(65,90));  //随机输出一个大写字母
  ```

- ord($str);   将字符串的第一个字母转换为ascii码

  ```php
  echo ord("Abcd");  //输出：65
  ```

- trim($str);  将字符串中左右两边的空格去除

- ltrim($str);  将字符串中左边的空格去除

- rtrim($str);  将字符串中右边的空格去除

- strtolower($str);  将字符串全都变成小写，不影响本身

- strtoupper($str);  将字符串全都变成大写，不影响本身

- ucfirst($str);  将字符串首字母大写

- ucwords($str);  单词首字母大写，只会处理空格分割的单词

- strrev($str);   颠倒字符串

- str_pad($str, $len, $pad_str, $pad_type);   将$pad_str以$len长度填充给$str, 默认是右填充，可以通过$pad_type修改填充位置

- md5($str, true/false);  加密

- nl2br($str);  将\n转换为br

- htmlspecialchars($str);  将字符串转换为html实体

## 4. 字符串的重要操作函数

- strlen($str);  返回字符串长度
- substr($str, $start, $len);  在$str字符串从$start + 1个字符开始截取$len个长度
- explode($sep, $str, $n); 按$sep字符将$str分割成字符串数组，$n表示分割后的字符串数组元素个数（可省略）
- implode(glue, $arr);  将数组按照$glue逐个连接成一个字符串;  
- str_replace($a, $b, $str);  将$str字符串中的$a字符替换成$b

## 5. 作业

### 1. 将字符串"This is a PHP programming book"中的单词按从小到大的顺序排列。

```php
$str = "This is a PHP programming book";
$arr = explode(" ", $str);
echo "原字符串：$str<br/>单词从小到大排列："
sort($arr);
foreach($arr as $val) {
    echo $val." ";
}
```

<a data-fancybox title="第一题" href="https://markdown123.oss-cn-beijing.aliyuncs.com/img/%E7%AC%AC%E4%B8%80%E9%A2%98.png">![第一题](https://markdown123.oss-cn-beijing.aliyuncs.com/img/%E7%AC%AC%E4%B8%80%E9%A2%98.png)</a>

### 2. 随机产生10个100以内互不相同的正整数，按照从小到大的顺序输出

```php
$arr = array();
wihle(count($arr) != 10) {
    $num = rand(1, 100);
    if(!in_array($num)) {
        $arr[] = $num;
    }
}
echo "10个100以内互不相同的正整数，按照从小到大的顺序输出：";
foreach ($arr as $val) {
    echo $val." ";
}
```



<a data-fancybox title="第三题" href="https://markdown123.oss-cn-beijing.aliyuncs.com/img/%E7%AC%AC%E4%B8%89%E9%A2%98.png">![第三题](https://markdown123.oss-cn-beijing.aliyuncs.com/img/%E7%AC%AC%E4%B8%89%E9%A2%98.png)</a>