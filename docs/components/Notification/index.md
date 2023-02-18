# Notification 通知


## 介绍 
---
### 功能

提供一个通知信息，可以选择不同的通知类型、是否显示关闭按钮、通知持续时间以及通知位置

### 属性
| 属性 | 类型| 可选值 | 默认值 | 含义 | 
| :-: | :-: | :-: | :-: | :-: | 
|Title|string|- | - | 通知标题 | 
|Content|string|- | - | 通知内容 | 
|Type|string|scuess\error\warning\info\none| none | 通知类型 |
|Position|string|top-right\top-left\bottom-right\bottom-left|top-right |通知位置|
|Duration|number| - | 4500 | 代表通知持续ms数，当为0时，通知不会自动关闭|
|OffsetY|number| - | 0|通知距离页面横轴距离|
|OffsetX|number| - | 20|通知距离页面数轴距离|
|ShowClose|boolean|true\false|true|是否展示关闭按钮|
|ZIndex|number|-|0|设置通知的z-index|
|Icon|string|-|none|将通知表填的按钮替换成自己想要的图片，此值应设为图片链接|
