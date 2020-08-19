
# 介绍

一个用G6做的ER图工具，最终目标是想做成在线版的 powerdesigner

<img target="_bank" src='https://raw.githubusercontent.com/lusess123/web-pdm/master/doc/web-pdm-pre.png'>


# 缘起

[ER图的设计与实现](https://www.yuque.com/antv/g6-blog/nbaywp)


# 在线体验


[定制版Demo](http://zyking.xyz:5080/demo/ "定制版Demo")

[基本版Demo](http://zyking.xyz:5002/ "基本版Demo")

# 下个版本的想法

redux有一个最佳实践就是要 data normalization ，简单的说就是拍平数据存储，尽量缩短数据的嵌套层次。这个其实是遵循关系数据的范式设计。

这样我们在设计状态的时候，其实就是在设计数据库

ORM 可以让数据库schema 变成对象模型
表的外键关联就转换成对象间的引用

这样前端的状态结构可以通过一张ER呈现出来，就象我们在一个业务系统之前会设计好ER 图，通过这张ER图，可以很直观的呈现业务逻辑特征和复杂度。

我们甚至可以直接在ER图操作进行设计调整和修改，通常使用的工具是power-designer。

Web-pdm 要做成在线版本的power-designer 工具。同时，根据上述理论，他可以成为某个前端状态管理库（取个名字就叫 boxer）的配套设计工具。

boxer的设计也是站在巨人的肩膀之上，调研了特性相近的库redux-orm 和 mobx-state-tree , 最终选择了mobx-state-tree 做为轮子 ,一个很重要的原因是类型支持得更好。boxer 的设想是对mobx-state-tree的一层封装。

Web-pdm 做为一个boxer  的配套工具 ，其开发也是通过boxer 来完成的，本身前端的状态管理足够复杂， 可以做为boxer的一个案例和最佳实践。在Web-pdm 页面上设计好模型 和 关联关系后， 可以一键生成boxer（mobx-state-tree） 的模型定义代码（以后甚至可以做到双向生成），然后对于模型可以增加action 让模型充血（ rich domain model）


# 快速启动

npm i 

npm run watch

# 特性


## next

- [ ]  模型在线新增和编辑
- [ ]  导出SQL语句


## 0.0.3

- [x]  升级antd 从V3到V4
- [x]  美化布局样式
- [x]  .PDM 文件上传按钮调整到工具栏

## 0.0.2

- [x] 状态管理从 DVA 改成轻量级的unstated-next

## 0.0.1

- [x]  typescript npm 源码发布
- [x]  DVA 状态管理
- [x]  支持 .PDM 文件上传



# 感谢

[G6](https://g6.antv.vision/zh/)

[DVA](https://dvajs.com/guide/)

[pdm-to-json](https://github.com/shermam/pdm-to-json)
