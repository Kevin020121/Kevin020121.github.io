---
title: 查找素数
date: 2022-3-3 

categories: 
 - 计算机二级
tags: 
 - 计算机二级
---

用户输入一个数lim，求小于lim的所有素数存放到arr数组里面，并且返回素数的个数。

```c
int fun(int lim, int *arr)
{
	int count = 0;
	int i,j;
	int flag = -1;
	for(i = 2;i <= lim; i++)
	{	
		flag = 1;
		for(j = 2;j <= i - 1;j++)
		{
			if(i % j == 0)
			{
				flag = -1;
				break;
			}
		}
		if(flag == 1)
		{
			arr[count++] = i;
		}
	}

	return count;
}
int main()
{
	int lim = -1,
		arr[100] = {0};
	int count = 0;
	int i = 0;
	printf("请输入一个数：");
	scanf("%d", &lim);
	count = fun(lim, arr);
	printf("小于%d的素数为：", lim);
	for(i;i <count;i++)
	{
		printf("%4d", arr[i]);
	}
	printf("\n");

	system("pause>0");
	return 0;
}
```

