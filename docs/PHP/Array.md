---
title: 数组
date: 2022-3-10

categories: 
 - PHP
tags: 
 - PHP
---

## 定义

```php
$a = array();
```

## 赋值

```php
$a[] = 1; //尾部追加元素
$a[] = 2; //$a[2] = 2;
$a[] = 3;
$a[1] = 4;
```

## 查看

1. var_dump($a);  //查看值和类型
2. print_r($);  //简单输出数组

## 输出

1. ```php
   foreach($a as $v) {   //$v表示数组里的值
       echo $v."$nbsp;$nbsp;$nbsp;";
   }
   ```

2. ```php
   foreach($a as $k=>$v) {
       echo "$k->$v"."$nbsp;$nbsp;$nbsp;"
   }
   ```

## 数组的合并

$a + $b：将$b中下标未出现在数组$a中的元素添加到数组$a末尾。

```php
$a = array(0,1,2);
$b = array(1,2,3,4);
print_r($a + $b);   //0,1,2,4
```

## 函数

1. range(start,end,step);  

创建下标从0开始，值从start到end结束，逐渐增加step的数组。

```php
$a = range(0,8,2);
print_r($a); // 0,2,4,6,8
```

2. list($a,$b,$c ...) = $a;

将$a数组下标为0开始依次赋值给$a,$b,$c...，若下标没有返回NULL

```php
$arr = array(1,2,3,4,5);
list($a,$b,$c,$d) = $arr;
echo $a,$b,$c,$d;  // 1,2,3,4,5
```

3. array_keys($a);

   返回将$a数组全部的键名组成的数组

4. array_values($a);

   返回将$a数组全部的值组成的数组

5. in_array($value, $a, [false/true]);

   判断$value值是否在$a数组当中

   第三个true表示比较时，会检测数据类型是否相同

6. count($a,[0/1]);

   统计$a的元素个数。第二个参数为1时，统计多维数组，默认是0。

7. array_count_values($a);

   统计$a数组每一个值的个数，并返回一个以值为key，个数为value的新数组。

## 堆栈操作

1. array_push($a);

   删除$a数组的最后一个元素并返回。

2. array_pop($val1,... , $a);

   将$val1添加到$a数组的末尾。

3. array_shift($a);

   删除$a数组的第一个元素并返回。

4. array_unshift($val1, ... , $a);

   将$val1添加到$a数组的开头

## 排序

1. sort($a);//将数组$a的值按从小到大排序，不保留下标
2. rsort($a);//将数组$a的值按从大到小排序，不保留下标
3. asort($a);//将数组$a的值按从小到大排序，保留下标
4. rasort($a);//将数组$a的值按从大到小排序，保留下标
5. ksort($a);//将数组$a的键按从小到大排序
6. krsort($a);//将数组$a的键按从大到小排序

## 课堂练习

随机生成200个小写字母，按照abcd ... xyz的顺序统计每一个小写字母出现的个数。

