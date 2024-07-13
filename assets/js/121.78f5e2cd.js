(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{402:function(t,v,_){"use strict";_.r(v);var a=_(10),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("ul",[v("li",[v("h1",{attrs:{id:"面试官-说说微信小程序的实现原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说微信小程序的实现原理"}},[t._v("#")]),t._v(" 面试官：说说微信小程序的实现原理？")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/4407cb60-3722-11ec-a752-75723a64e8f5.png",alt:""}})])])]),t._v(" "),v("h2",{attrs:{id:"一、背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、背景"}},[t._v("#")]),t._v(" 一、背景")]),t._v(" "),v("p",[t._v("网页开发，渲染线程和脚本是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应的原因，本质就是我们常说的 "),v("code",[t._v("JS")]),t._v(" 是单线程的")]),t._v(" "),v("p",[t._v("而在小程序中，选择了 "),v("code",[t._v("Hybrid")]),t._v(" 的渲染方式，将视图层和逻辑层是分开的，双线程同时运行，视图层的界面使用 "),v("code",[t._v("WebView")]),t._v(" 进行渲染，逻辑层运行在 "),v("code",[t._v("JSCore")]),t._v(" 中")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/4e322e50-3722-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),v("ul",[v("li",[t._v("渲染层：界面渲染相关的任务全都在 WebView 线程里执行。一个小程序存在多个界面，所以渲染层存在多个 WebView 线程")]),t._v(" "),v("li",[t._v("逻辑层：采用 JsCore 线程运行 JS 脚本，在这个环境下执行的都是有关小程序业务逻辑的代码")])]),t._v(" "),v("h2",{attrs:{id:"二、通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、通信"}},[t._v("#")]),t._v(" 二、通信")]),t._v(" "),v("p",[t._v("小程序在渲染层，宿主环境会把"),v("code",[t._v("wxml")]),t._v("转化成对应的"),v("code",[t._v("JS")]),t._v("对象")]),t._v(" "),v("p",[t._v("在逻辑层发生数据变更的时候，通过宿主环境提供的"),v("code",[t._v("setData")]),t._v("方法把数据从逻辑层传递到渲染层，再经过对比前后差异，把差异应用在原来的"),v("code",[t._v("Dom")]),t._v("树上，渲染出正确的视图")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/5948ed10-3722-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),v("p",[t._v("当视图存在交互的时候，例如用户点击你界面上某个按钮，这类反馈应该通知给开发者的逻辑层，需要将对应的处理状态呈现给用户")]),t._v(" "),v("p",[t._v("对于事件的分发处理，微信进行了特殊的处理，将所有的事件拦截后，丢到逻辑层交给"),v("code",[t._v("JavaScript")]),t._v("进行处理")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/61f9f670-3722-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),v("p",[t._v("由于小程序是基于双线程的，也就是任何在视图层和逻辑层之间的数据传递都是线程间的通信，会有一定的延时，因此在小程序中，页面更新成了异步操作")]),t._v(" "),v("p",[t._v("异步会使得各部分的运行时序变得复杂一些，比如在渲染首屏的时候，逻辑层与渲染层会同时开始初始化工作，但是渲染层需要有逻辑层的数据才能把界面渲染出来")]),t._v(" "),v("p",[t._v("如果渲染层初始化工作较快完成，就要等逻辑层的指令才能进行下一步工作")]),t._v(" "),v("p",[t._v("因此逻辑层与渲染层需要有一定的机制保证时序正确，在每个小程序页面的生命周期中，存在着若干次页面数据通信")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/6cb798b0-3722-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"三、运行机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、运行机制"}},[t._v("#")]),t._v(" 三、运行机制")]),t._v(" "),v("p",[t._v("小程序启动运行两种情况：")]),t._v(" "),v("ul",[v("li",[t._v("冷启动（重新开始）：用户首次打开或者小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即为冷启动")]),t._v(" "),v("li",[t._v("热启动：用户已经打开过小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需要将后台态的小程序切换到前台，这个过程就是热启动")])]),t._v(" "),v("h4",{attrs:{id:"需要注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#需要注意"}},[t._v("#")]),t._v(" 需要注意：")]),t._v(" "),v("blockquote",[v("p",[t._v("1.小程序没有重启的概念"),v("br"),t._v("\n2.当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后会被微信主动销毁"),v("br"),t._v("\n3.短时间内收到系统两次以上内存警告，也会对小程序进行销毁，这也就为什么一旦页面内存溢出，页面会奔溃的本质原因了")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/968c8510-3722-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),v("p",[t._v("开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户")]),t._v(" "),v("p",[t._v("每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上")]),t._v(" "),v("h2",{attrs:{id:"参考文献"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),v("ul",[v("li",[t._v("https://developers.weixin.qq.com/community/develop/article/doc/0008a4c4f28f30fe3eb863b2750813")]),t._v(" "),v("li",[t._v("https://juejin.cn/post/6976805521407868958#heading-5")]),t._v(" "),v("li",[t._v("https://juejin.cn/post/6844903805675388942")]),t._v(" "),v("li",[t._v("https://juejin.cn/post/6844903999863259144#heading-1")])])])}),[],!1,null,null,null);v.default=e.exports}}]);