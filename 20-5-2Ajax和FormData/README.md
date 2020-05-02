## 原生实现ajax和Node的FormData

> 供大家学习使用

原生实现：ajax以及node后端http服务器。 打开文件后，运行http服务

```
node server.js
```

### 一：get请求情况

>  文件《1indexGet.html》 来运行get请求情况

1 简单点击获取数据：

- 1 有data的情况：get请求带一个对象。发送给服务器：返回这个对象：

重点：url.parse 这个库来解析url

- 2 没有data的情况。get请求没有带对象。返回服务器的一个json数据

重点：本地读取数据，利用管道返回

2 获取图片：

我采取的是获取 图片的 data:base64的URI , 注意服务器的逻辑是发送的对象中：key===2时。  

重点：利用对象包裹base64数据=》转JSON返回

### 二：post发送情况

>  文件《1indexPost.html》 来运行post请求情况

1 非表单数据：

首先设置发送的文件类型：

```
ContentType: "application/x-www-form-urlencoded",
```





2 表单数据




## 注：

get和post请求

1 区别：

1. Get是不安全的，传输数据放在请求的URL中；传送的数据量较小，这主要是因为受URL长度限制



的所有操作对用户来说都是不可见的。

 2 Post传送的数据，封装在请求体中：除非后端做限制，否则被放在请求体重封装




   3. Get限制Form表单的数据集的值必须为ASCII字符；而Post支持整个ISO10646字符集。

   4. Get执行效率却比Post方法好。Get是form提交的默认方法。

   
## 客户端



## 服务端

以node为例：


require("url")  工具库

1 路由：

 url.parse(request.url).pathname;



2 get数据获取：true 才会转为对象，false是字符串

类似：?a=1&b=2

url.parse(request.url, true).query;



3 post数据获取：注意表单必须有name值

有时候需要判断并阻止post数据过大

querystring.parse(data)



