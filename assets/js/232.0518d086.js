(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{512:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"面试官-v-show和v-if有什么区别-使用场景分别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-v-show和v-if有什么区别-使用场景分别是什么"}},[s._v("#")]),s._v(" 面试官：v-show和v-if有什么区别？使用场景分别是什么？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/d21c3c50-3acb-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"一、v-show与v-if的共同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、v-show与v-if的共同点"}},[s._v("#")]),s._v(" 一、v-show与v-if的共同点")]),s._v(" "),t("p",[s._v("我们都知道在 "),t("code",[s._v("vue")]),s._v(" 中 "),t("code",[s._v("v-show")]),s._v(" 与 "),t("code",[s._v("v-if")]),s._v(" 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示")]),s._v(" "),t("p",[s._v("在用法上也是相同的")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Model v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("show"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"isShow"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Model v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"isShow"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("当表达式为"),t("code",[s._v("true")]),s._v("的时候，都会占据页面的位置")]),s._v(" "),t("li",[s._v("当表达式都为"),t("code",[s._v("false")]),s._v("时，都不会占据页面位置")])]),s._v(" "),t("h2",{attrs:{id:"二、v-show与v-if的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、v-show与v-if的区别"}},[s._v("#")]),s._v(" 二、v-show与v-if的区别")]),s._v(" "),t("ul",[t("li",[s._v("控制手段不同")]),s._v(" "),t("li",[s._v("编译过程不同")]),s._v(" "),t("li",[s._v("编译条件不同")])]),s._v(" "),t("p",[s._v("控制手段："),t("code",[s._v("v-show")]),s._v("隐藏则是为该元素添加"),t("code",[s._v("css--display:none")]),s._v("，"),t("code",[s._v("dom")]),s._v("元素依旧还在。"),t("code",[s._v("v-if")]),s._v("显示隐藏是将"),t("code",[s._v("dom")]),s._v("元素整个添加或删除")]),s._v(" "),t("p",[s._v("编译过程："),t("code",[s._v("v-if")]),s._v("切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；"),t("code",[s._v("v-show")]),s._v("只是简单的基于css切换")]),s._v(" "),t("p",[s._v("编译条件："),t("code",[s._v("v-if")]),s._v("是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("v-show")]),s._v(" 由"),t("code",[s._v("false")]),s._v("变为"),t("code",[s._v("true")]),s._v("的时候不会触发组件的生命周期")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("v-if")]),s._v("由"),t("code",[s._v("false")]),s._v("变为"),t("code",[s._v("true")]),s._v("的时候，触发组件的"),t("code",[s._v("beforeCreate")]),s._v("、"),t("code",[s._v("create")]),s._v("、"),t("code",[s._v("beforeMount")]),s._v("、"),t("code",[s._v("mounted")]),s._v("钩子，由"),t("code",[s._v("true")]),s._v("变为"),t("code",[s._v("false")]),s._v("的时候触发组件的"),t("code",[s._v("beforeDestory")]),s._v("、"),t("code",[s._v("destoryed")]),s._v("方法")])])]),s._v(" "),t("p",[s._v("性能消耗："),t("code",[s._v("v-if")]),s._v("有更高的切换消耗；"),t("code",[s._v("v-show")]),s._v("有更高的初始渲染消耗；")]),s._v(" "),t("h2",{attrs:{id:"三、v-show与v-if原理分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、v-show与v-if原理分析"}},[s._v("#")]),s._v(" 三、v-show与v-if原理分析")]),s._v(" "),t("p",[s._v("具体解析流程这里不展开讲，大致流程如下")]),s._v(" "),t("ul",[t("li",[s._v("将模板"),t("code",[s._v("template")]),s._v("转为"),t("code",[s._v("ast")]),s._v("结构的"),t("code",[s._v("JS")]),s._v("对象")]),s._v(" "),t("li",[s._v("用"),t("code",[s._v("ast")]),s._v("得到的"),t("code",[s._v("JS")]),s._v("对象拼装"),t("code",[s._v("render")]),s._v("和"),t("code",[s._v("staticRenderFns")]),s._v("函数")]),s._v(" "),t("li",[t("code",[s._v("render")]),s._v("和"),t("code",[s._v("staticRenderFns")]),s._v("函数被调用后生成虚拟"),t("code",[s._v("VNODE")]),s._v("节点，该节点包含创建"),t("code",[s._v("DOM")]),s._v("节点所需信息")]),s._v(" "),t("li",[t("code",[s._v("vm.patch")]),s._v("函数通过虚拟"),t("code",[s._v("DOM")]),s._v("算法利用"),t("code",[s._v("VNODE")]),s._v("节点创建真实"),t("code",[s._v("DOM")]),s._v("节点")])]),s._v(" "),t("h3",{attrs:{id:"v-show原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-show原理"}},[s._v("#")]),s._v(" v-show原理")]),s._v(" "),t("p",[s._v("不管初始条件是什么，元素总是会被渲染")]),s._v(" "),t("p",[s._v("我们看一下在"),t("code",[s._v("vue")]),s._v("中是如何实现的")]),s._v(" "),t("p",[s._v("代码很好理解，有"),t("code",[s._v("transition")]),s._v("就执行"),t("code",[s._v("transition")]),s._v("，没有就直接设置"),t("code",[s._v("display")]),s._v("属性")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://github.com/vuejs/vue-next/blob/3cd30c5245da0733f9eb6f29d220f39c46518162/packages/runtime-dom/src/directives/vShow.ts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("vShow")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ObjectDirective"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VShowElement"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("beforeMount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" value "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" transition "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_vod "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("display "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'none'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("display\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("transition "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      transition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("beforeEnter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setDisplay")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mounted")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" value "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" transition "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("transition "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      transition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("updated")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" oldValue "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" transition "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("beforeUnmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" value "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setDisplay")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"v-if原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-if原理"}},[s._v("#")]),s._v(" v-if原理")]),s._v(" "),t("p",[t("code",[s._v("v-if")]),s._v("在实现上比"),t("code",[s._v("v-show")]),s._v("要复杂的多，因为还有"),t("code",[s._v("else")]),s._v(" "),t("code",[s._v("else-if")]),s._v(" 等条件需要处理，这里我们也只摘抄源码中处理 "),t("code",[s._v("v-if")]),s._v(" 的一小部分")]),s._v(" "),t("p",[s._v("返回一个"),t("code",[s._v("node")]),s._v("节点，"),t("code",[s._v("render")]),s._v("函数通过表达式的值来决定是否生成"),t("code",[s._v("DOM")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://github.com/vuejs/vue-next/blob/cdc9f336fd/packages/compiler-core/src/transforms/vIf.ts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" transformIf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createStructuralDirectiveTransform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^(if|else|else-if)$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" context")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("processIf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ifNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" isRoot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isRoot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          ifNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("codegenNode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCodegenNodeForBranch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            context\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" IfConditionalExpression\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// attach this branch's codegen node to the v-if root.")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" parentCondition "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getParentCondition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ifNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("codegenNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          parentCondition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alternate "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createCodegenNodeForBranch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" ifNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("branches"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            context\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h2",{attrs:{id:"四、v-show与v-if的使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、v-show与v-if的使用场景"}},[s._v("#")]),s._v(" 四、v-show与v-if的使用场景")]),s._v(" "),t("p",[t("code",[s._v("v-if")]),s._v(" 与 "),t("code",[s._v("v-show")]),s._v(" 都能控制"),t("code",[s._v("dom")]),s._v("元素在页面的显示")]),s._v(" "),t("p",[t("code",[s._v("v-if")]),s._v(" 相比 "),t("code",[s._v("v-show")]),s._v(" 开销更大的（直接操作"),t("code",[s._v("dom")]),s._v("节点增加与删除）")]),s._v(" "),t("p",[s._v("如果需要非常频繁地切换，则使用 v-show 较好")]),s._v(" "),t("p",[s._v("如果在运行时条件很少改变，则使用 v-if 较好")]),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("ul",[t("li",[s._v("https://www.jianshu.com/p/7af8554d8f08")]),s._v(" "),t("li",[s._v("https://juejin.cn/post/6897948855904501768")]),s._v(" "),t("li",[s._v("https://vue3js/docs/zh")])])])}),[],!1,null,null,null);t.default=e.exports}}]);