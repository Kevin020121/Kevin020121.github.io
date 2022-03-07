---
title: 完全平方数
date: 2022-3-6

categories: 
 - 计算机二级
tags: 
 - 计算机二级
---

给定一个整数n（n < 10000），如果n加上100后是一个完全平方数（完全平方数就是开方后的结果是整数的数），并且n加上268也是一个完全平方数，则函数值返回1，否则返回0。

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int fun(int n)
{
	int num1 = (int)sqrt((double)n + 100);
	int num2 = (int)sqrt((double)n + 268);
    //判断完全平方数
	if(num1 == sqrt((double)n + 100) && num2 == sqrt((double)n + 268))
	{
		return 1;
	}
	return 0;
}

int main()
{
	int n = 1;
	for(n = 1;n < 10000;n++)
	{
		if(fun(n))
		{
			printf("%d\n", n);
		}
	}

	system("pause>0");
	return 0;
}
```

