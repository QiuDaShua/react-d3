# react-d3
umi+antd-admin 框架中使用hooks结合d3完成股权穿透图和股权结构图(web)

贴上vue2版本代码：https://github.com/QiuDaShua/vue2-d3.git


版本信息：
"d3": "4.13.0",
"antd": "3.24.2",
"umi": "^2.7.7",


股权穿透图基础功能：
1、默认上下游信息展示，如果没有上下游信息只展示自己
2、点击请求子节点信息展示，收起子节点
3、全屏功能
4、放大器放大缩小（react项目中不知道为啥使用d3.zoom方法不好使，可能跟网页中滚动事件冲突有关，最后选择单独防止放大器进行放大缩小功能）
5、移动功能

股权结构图基础功能：
1、tab切换展示上游或下游信息
2、默认展示一层
3、点击请求子节点信息展示，收起子节点

总结：
前端小白一枚，在之前只使用过echarts进行可视化，在开发这个功能时候发现d3版本中文网站内容较少，基本出现问题讨论也是在外文网站，踩过一堆版本的坑，最终选择稳定且例子比较多的v4版本。还有基本都是默认信息展示，很少有点击请求的功能，进行一个最终功能的整合，如果有问题欢迎大家积极提出讨论，共同进步~
