# AST

- AST 介绍
- 什么是编译器
- 编译器的基本思路
- 一个简单的编译器的实现
- ast 的使用

## AST 是什么

抽象语法树

代码的语法检查 代码风格检查 代码的格式化 代码错误提示 自动补全等

前端工程化的基石

构建工具

- webpack plugin loader
- postcss
- eslint

开发框架

- react jsx => vdom => ast
- ts

### 什么是编译器

es6 7 8 jsx => js

编译:从高级语言 转换成低级语言

高级语言：分支 循环 函数 判断 等
编译
低级语言：汇编语言 机器语言 寄存器 内存

前端：

- less/sass ->css
- ts -> js
- 编译时 rax => 小程序 跨端

### 编译器思路

1. 词法分析

tokenizer 分词器
input token
init x ;
我是老师 我 是 老师

2. 语法分析

babel 插件： es6 代码 -> @babel/parser -> AST -> @babel/traverse -> 新的 ast
-> @babel/generator -> es5 代码

3. 代码转换
   AST 转换 =》 new AST
   taro 一种 DSL 转化成另外一种 DSL

4. 完整链路

input => tokenizer => tokens // 词法分析
tokens => parser =》 ast // 语法分析 生成 AST
ast =》 transformer =》new ast // 中间代码生成
new ast => generator =》output //生成代码

## 如何实现一个简单的编译器

## babel

用途

- esnext ts
- 代码静态检查
- eslint

babel7

@babel 空间命名下

- @babel/parser 接受源码 进行词法分析 语法分析 生成 AST
- @babel/traverse 接受一个 AST 进行遍历 可以对节点进行替换 删除 添加
- @babel/generator 接受新的 AST 转换为代码字符串
- @babel/types 用于检验、构建和改变 ast 树的节点
- @babel/core babel 的编译器 核心 API

#### babel 插件

简单的函数 返回一个对象

```js
export default function (api, options, dirname) {
  // api 一个对象 types traverse
  // options 插件参数
  // dirname 目录名字
  return {
    name: '插件名字',
    pre() {}, //遍历前调用
    visitor: {
      // 访问者模式 访问的节点 对节点进行处理
    },
    post() {}, // 遍历后调用
  }
}
```

### path

- findParent 向上查找节点
- isXXX 是否是某个类型的节点
- insertBefore
- insertAfter
- replaceWith 用某个节点替换当前节点
- remove 删除节点
- traverse(visitor) 遍历当前节点的子节点
