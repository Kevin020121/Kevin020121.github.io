---
title: 线性表
date: 2022-2-26
categories: 
 - 数据结构
tags: 
 - 数据结构
---

## 一. 线性表的定义

<p style="text-indent: 2em">线性表(liner_List)是有n(n≥0)个类型相同的数据元素a~1~，a~2~，...，a~n~组成的有限序列，每个元素都有唯一的前驱和唯一的后继（第一个元素无前驱，最后一个元素无后继）。记作（a~1~，a~2~，... , a~n~）。</p>

## 二. 元素的位置

<p style="text-indent: 2em">线性表（a~1~，a~2~，... , a~n~），数据元素a~i~在线性表中的序号i，称为元素a~i~的位置。</p>

## 三. 线性表的长度

<p style="text-indent: 2em">线性表中数据元素的个数n为线性表的长度，当n=0时称为空表。</p>

::: tip 说明：

1. 线性表中数据元素的类型可以是整型，字符型等简单数据类型，也可以是结构体、共同体等复杂的数据类型，但同一线性表中的数据元素必须用于同一个数据对象。（数据类型要一致）类似于数组。
2. 线性表令相邻数据元素之间存在着序偶关系，即线性表（a~1~，a~2~，a~i-1~，a~i~，a~i+1~，... , a~n~），a~i~为a~i-1~，的前驱，a~i-1~为a~i~的后继。

:::

## 四. 线性表的合并

### 1.（不考虑重复）

```c
#include <stdio.h>
#include <stdlib.h>

#define La 4
#define Lb 4

int main(void)
{
	int arr_a[La+Lb] = {12,5,8,11};
	int arr_b[Lb] = {22,6,8,9};
	int length = Lb;
	int i;
	for(i = 0;i < Lb; i++)
	{
		arr_a[length++] = arr_b[i];
	}
	printf("合并之后的线性表：");
	for(i = 0;i < length;i++)
	{
		printf("%4d", arr_a[i]);
	}


	system("pause");
	return 0;
}
```

<p style="text-indent: 2em">有两个线性表arr_a和arr_b，循环遍历arr_b，将arr_b里面的每一个元素放到arr_a里面。</p>

### 2. (考虑重复)

```c
#include <stdio.h>
#include <stdlib.h>

#define La 4
#define Lb 4

int main(void)
{
	int arr_a[La+Lb] = {12,5,8,11};
	int arr_b[Lb] = {22,6,8,9};
	int length = La;
	int i,j;
	for(i = 0;i < Lb; i++)
	{	
		for(j = 0;j < La;j++)
		{
			if(arr_b[i] == arr_a[j])
			{
				break;
			}
		}
		if(j == La)
		{
			arr_a[length++] = arr_b[i]; 
		}
		
	}
	printf("合并之后的线性表：");
	for(i = 0;i < length;i++)
	{
		printf("%4d", arr_a[i]);
	}


	system("pause");
	return 0;
}

```

<p style="text-indent: 2em">如果要考虑重复，就要多一次判断，判断arr_b中的元素有没有在arr_a中出现。利用双重循环，外层循环遍历arr_b，内层循环遍历arr_a。将arr_b中的每一个元素与arr_a中的所有元素进行比较，如果有一样的，则跳出循环；如果发现循环变量加到了arr_a的最后，则没有发现重复，将元素添加到arr_a里面。</p>

## 五. 线性表的查找

随机生成10个两位数，输入要查找的数据，进行数据查找。

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define Array_length 10

int main(void)
{
	int arr[Array_length] = {0};
	int i;
	int x;
	srand((unsigned int)time(NULL));
	//生成10个10~99随机数
	for(i = 0;i < Array_length;i++)
	{
		arr[i] = rand() % 90 + 10;
		printf("%4d", arr[i]);
		//每5个换一行
		if((i+1) % 5 == 0)
		{
			printf("\n");
		}
	}
	//查找
	printf("请输入要查找的值：");
	scanf("%d",&x);
	for(i = 0;i < Array_length;i++)
	{
		if(x == arr[i])
		{
			printf("找到了，是第%d个！\n", i + 1);
			break;
		}
	}
	if(i == Array_length)
	{
		printf("没有找到！\n");
	}


	system("pause");
	return 0;
}

```

<p style="text-indent:2em">利用随机函数产生10个10~99的随机数放进arr数组里面。用户手动输入要查找的值，循环遍历arr，如果用户输入的值在arr里面存在，则找到并提示该值在arr中是第几个；若遍历到了最后，则没有找到。</p>

## 六. 线性表的插入

```c
#include <stdio.h>
#include <stdlib.h>

#define La 10

int main(void)
{
	int arr[La+1] = {3,5,8,11,15,20,30,45,67,90};
	int i = 0,
		x = 0,
		index = 0;

	printf("原来的数组：");
	for(i = 0;i < La;i++)
	{
		printf("%4d",arr[i]);
	}
	printf("\n");
	
	printf("请输入要插入的数：");
	scanf("%d", &x);
	//找到位置
	for(i = 0;i < La;i++)
	{
		if(arr[i] <= x)
		{	
			index++;
		}
		else
		{
			break;
		}
	}
	//往后移动一个元素
	for(i = La;i > index;i--)
	{
		arr[i] = arr[i - 1];
	}
	//插入
	arr[index] = x;
	printf("插入之后的数：");
	for(i = 0;i < La + 1;i++)
	{
		printf("%4d", arr[i]);
	}
	printf("\n");
	
	system("pause");
}
```

<p style="text-indent:2em">用户输入要插入的数据，首先找到该数据要插入的位置，然后从该位置开始往后移动一个位置，最后将数据插入到指定位置。</p>
