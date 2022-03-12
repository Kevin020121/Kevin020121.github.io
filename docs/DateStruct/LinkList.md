---
title: 链表的基本操作
date: 2022-3-12

categories: 
 - 数据结构
tags: 
 - 数据结构
---

## 一、头添加(无头)

```c
#include <stdio.h>
#include <stdlib.h>

struct Node 
{
	int data;
	struct Node *pNext;
};
void AddToHead(struct Node **pHead, struct Node **pEnd, int data);
int main(void)
{
	struct Node *pHead = NULL;
	struct Node *pEnd = NULL;
	struct Node *pt;
	//头添加
	AddToHead(&pHead,&pEnd, 1);
	AddToHead(&pHead,&pEnd, 2);
	AddToHead(&pHead,&pEnd, 3);
	AddToHead(&pHead,&pEnd, 4);
	AddToHead(&pHead,&pEnd, 5);
	//输出
	pt = pHead;
	while(pt != NULL)
	{
		printf("%4d", pt->data);
		pt = pt->pNext;
	}

	system("pause");
	return 0;
}
void AddToHead(struct Node **pHead, struct Node **pEnd, int data)
{	
	//创建节点
	struct Node *pt = (struct Node *)malloc(sizeof(struct Node));
	//赋值
	pt->data = data;
	pt->pNext = NULL;
	//如果一个节点也没有
	if(*pHead == NULL)
	{
		*pHead = pt;
		*pEnd = pt;
	}
	else//如果有节点    追加头加点
	{
		pt->pNext = *pHead;
		*pHead = pt;
	}
}

```

## 二、头添加(有头)

```c
#include <stdio.h>
#include <stdlib.h>

struct Node 
{
	int data;
	struct Node *pNext;
} *pHead; //头节点
void AddToHead(int data);
void Print();
int main(void)
{	
	int a[5] = {1,2,3,4,5};
	int i = 0;
	pHead = (struct Node *)malloc(sizeof(struct Node));
	pHead->pNext = NULL;
	//头添加
	for(i;i < 5;i++)
	{
		AddToHead(a[i]);
	}
	Print();


	system("pause");
	return 0;
}
void AddToHead(int data)
{	
	//创建节点
	struct Node *pt = (struct Node *)malloc(sizeof(struct Node));
	//赋值
	pt->data = data;
	pt->pNext = NULL;

	//接上去
	pt->pNext = pHead->pNext;
	pHead->pNext = pt;
}
void Print()
{
	struct Node *pt = pHead->pNext;

	while(pt != NULL)
	{
		printf("%4d", pt->data);
		pt = pt->pNext;
	}
	printf("\n");
}
```

## 三、删除结点(有头)

```c
#include <stdio.h>
#include <stdlib.h>

struct Node 
{
	int data;
	struct Node *pNext;
} *pHead; //头节点
void AddToHead(int data);
void Print();
void DeleteNodeByPos(int pos);

int main(void)
{	
	int a[5] = {1,2,3,4,5};
	int i = 0;

	pHead = (struct Node *)malloc(sizeof(struct Node));
	pHead->pNext = NULL;
	//头添加
	for(i;i < 5;i++)
	{
		AddToHead(a[i]);
	}
	Print();
	DeleteNodeByPos(4);
	Print();

	system("pause");
	return 0;
}
void AddToHead(int data)
{	
	//创建节点
	struct Node *pt = (struct Node *)malloc(sizeof(struct Node));
	//赋值
	pt->data = data;
	pt->pNext = NULL;

	//接上去
	pt->pNext = pHead->pNext;
	pHead->pNext = pt;
}
void Print()
{
	struct Node *pt = pHead->pNext;

	while(pt != NULL)
	{
		printf("%4d", pt->data);
		pt = pt->pNext;
	}
	printf("\n");
}
void DeleteNodeByPos(int pos)
{
	struct Node *p = pHead;
	struct Node *pt = NULL;
	int n = 0;
	//寻找要删除的结点位置
	while(n < pos - 1)
	{	
		n++;
		p = p->pNext;
	}
	//删除操作
	pt = p->pNext;
	p->pNext = p->pNext->pNext;
	free(pt);
}
```

## 四、插入结点(有头)

```c
#include <stdio.h>
#include <stdlib.h>

struct Node 
{
	int data;
	struct Node *pNext;
} *pHead; //头节点

void AddToHead(int data);
void Print();
void InsertList(int pos, int data);
int main(void)
{	
	int a[5] = {1,2,3,4,5};
	int i = 0;
	pHead = (struct Node *)malloc(sizeof(struct Node));
	pHead->pNext = NULL;
	//头添加
	for(i;i < 5;i++)
	{
		AddToHead(a[i]);
	}
	Print();
	InsertList(3, 123);
	InsertList(2, 100);
	InsertList(5, -1);
	Print();

	system("pause");
	return 0;
}
void AddToHead(int data)
{	
	//创建节点
	struct Node *pt = (struct Node *)malloc(sizeof(struct Node));
	//赋值
	pt->data = data;
	pt->pNext = NULL;

	//接上去
	pt->pNext = pHead->pNext;
	pHead->pNext = pt;
}
void Print()
{
	struct Node *pt = pHead->pNext;

	while(pt != NULL)
	{
		printf("%4d", pt->data);
		pt = pt->pNext;
	}
	puts("");
}
void InsertList(int pos, int data)
{
	struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
	struct Node *p = pHead;
	int n = 0;
	newNode->data = data;
	newNode->pNext = NULL;
	while(n < pos - 1)
	{
		n++;
		p = p->pNext;
	}
	newNode->pNext = p->pNext;
	p->pNext = newNode;
}
```

