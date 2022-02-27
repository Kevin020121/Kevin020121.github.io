---
title: 数字逆序
date: 2020-2-27

categories: 
 - 计算机二级C
tags: 
 - 计算机二级C
---

输入一个数，逆序输入这个数。

例如输入123，输出321。

```C
#include <stdio.h>
#include <stdlib.h>

int reverse(int num);

int main(void)
{
	int num = 0;
	printf("请输入一个数：");
	scanf("%d", &num);
	printf("%d的逆序是%d", num, reverse(num));

	system("pause>0");
	return 0;
}
int reverse(int num)
{
	int n = 0;
	int result = 0;
	//判断该数是整还是负
	if(num > 0)
	{
		n = num;
	}
	else
	{
		n = -num;
	}
    //从各位开始提取每一位数字
	while(n > 0)
	{
		result = result * 10 + n % 10;
		n /= 10;
	}
	return result;
}
```

首先判断该数是整数还是负数，然后从个位开始提取每一位上的数字，每提取一次，结果*10（提升位数）。