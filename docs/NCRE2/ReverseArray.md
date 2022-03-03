---
title: 行列式转置
date: 2022-3-3

categories: 
 - 计算机二级
tags: 
 - 计算机二级
---

## 将三行三列的矩阵转置（行变列）

<a data-fancybox title="QQ截图20220303195904" href="https://markdown123.oss-cn-beijing.aliyuncs.com/img/QQ%E6%88%AA%E5%9B%BE20220303195904.png">![QQ截图20220303195904](https://markdown123.oss-cn-beijing.aliyuncs.com/img/QQ%E6%88%AA%E5%9B%BE20220303195904.png)</a>

代码：

```c
	int array[3][3] = {{100,200,300}, {400,500,600}, {700,800,900}};
	int i,j,t;
	//行列互换
	for(i = 0;i < 3;i++)
	{
		for(j = i + 1;j < 3;j++)
		{
			t = array[i][j];
			array[i][j] = array[j][i];
			array[j][i] = t;
		}
	}
```

