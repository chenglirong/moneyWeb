(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{462:function(v,_,t){"use strict";t.r(_);var a=t(10),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-如何理解osi七层模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-如何理解osi七层模型"}},[v._v("#")]),v._v(" 面试官：如何理解OSI七层模型?")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/e2e1b910-b61e-11eb-ab90-d9ae814b240d.png",alt:""}})]),v._v(" "),_("h2",{attrs:{id:"一、是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[v._v("#")]),v._v(" 一、是什么")]),v._v(" "),_("p",[v._v("OSI （Open System Interconnect）模型全称为开放式通信系统互连参考模型，是国际标准化组织 ( ISO ) 提出的一个试图使各种计算机在世界范围内互连为网络的标准框架")]),v._v(" "),_("p",[_("code",[v._v("OSI")]),v._v("将计算机网络体系结构划分为七层，每一层实现各自的功能和协议，并完成与相邻层的接口通信。即每一层扮演固定的角色，互不打扰")]),v._v(" "),_("h2",{attrs:{id:"二、划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、划分"}},[v._v("#")]),v._v(" 二、划分")]),v._v(" "),_("p",[_("code",[v._v("OSI")]),v._v("主要划分了七层，如下图所示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/eb1b2170-b61e-11eb-ab90-d9ae814b240d.png",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[v._v("#")]),v._v(" 应用层")]),v._v(" "),_("p",[v._v("应用层位于 OSI 参考模型的第七层，其作用是通过应用程序间的交互来完成特定的网络应用")]),v._v(" "),_("p",[v._v("该层协议定义了应用进程之间的交互规则，通过不同的应用层协议为不同的网络应用提供服务。例如域名系统 "),_("code",[v._v("DNS")]),v._v("，支持万维网应用的 "),_("code",[v._v("HTTP")]),v._v(" 协议，电子邮件系统采用的 "),_("code",[v._v("SMTP")]),v._v("协议等")]),v._v(" "),_("p",[v._v("在应用层交互的数据单元我们称之为报文")]),v._v(" "),_("h3",{attrs:{id:"表示层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表示层"}},[v._v("#")]),v._v(" 表示层")]),v._v(" "),_("p",[v._v("表示层的作用是使通信的应用程序能够解释交换数据的含义，其位于 "),_("code",[v._v("OSI")]),v._v("参考模型的第六层，向上为应用层提供服务，向下接收来自会话层的服务")]),v._v(" "),_("p",[v._v("该层提供的服务主要包括数据压缩，数据加密以及数据描述，使应用程序不必担心在各台计算机中表示和存储的内部格式差异")]),v._v(" "),_("h3",{attrs:{id:"会话层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#会话层"}},[v._v("#")]),v._v(" 会话层")]),v._v(" "),_("p",[v._v("会话层就是负责建立、管理和终止表示层实体之间的通信会话")]),v._v(" "),_("p",[v._v("该层提供了数据交换的定界和同步功能，包括了建立检查点和恢复方案的方法")]),v._v(" "),_("h3",{attrs:{id:"传输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[v._v("#")]),v._v(" 传输层")]),v._v(" "),_("p",[v._v("传输层的主要任务是为两台主机进程之间的通信提供服务，处理数据包错误、数据包次序，以及其他一些关键传输问题")]),v._v(" "),_("p",[v._v("传输层向高层屏蔽了下层数据通信的细节。因此，它是计算机通信体系结构中关键的一层")]),v._v(" "),_("p",[v._v("其中，主要的传输层协议是"),_("code",[v._v("TCP")]),v._v("和"),_("code",[v._v("UDP")])]),v._v(" "),_("h3",{attrs:{id:"网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[v._v("#")]),v._v(" 网络层")]),v._v(" "),_("p",[v._v("两台计算机之间传送数据时其通信链路往往不止一条，所传输的信息甚至可能经过很多通信子网")]),v._v(" "),_("p",[v._v("网络层的主要任务就是选择合适的网间路由和交换节点，确保数据按时成功传送")]),v._v(" "),_("p",[v._v("在发送数据时，网络层把传输层产生的报文或用户数据报封装成分组和包，向下传输到数据链路层")]),v._v(" "),_("p",[v._v("在网络层使用的协议是无连接的网际协议（Internet Protocol）和许多路由协议，因此我们通常把该层简单地称为 IP 层")]),v._v(" "),_("h3",{attrs:{id:"数据链路层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[v._v("#")]),v._v(" 数据链路层")]),v._v(" "),_("p",[v._v("数据链路层通常也叫做链路层，在物理层和网络层之间。两台主机之间的数据传输，总是在一段一段的链路上传送的，这就需要使用专门的链路层协议")]),v._v(" "),_("p",[v._v("在两个相邻节点之间传送数据时，数据链路层将网络层交下来的 "),_("code",[v._v("IP")]),v._v("数据报组装成帧，在两个相邻节点间的链路上传送帧")]),v._v(" "),_("p",[v._v("每一帧的数据可以分成：报头"),_("code",[v._v("head")]),v._v("和数据"),_("code",[v._v("data")]),v._v("两部分:")]),v._v(" "),_("ul",[_("li",[v._v("head 标明数据发送者、接受者、数据类型，如 MAC地址")]),v._v(" "),_("li",[v._v("data 存储了计算机之间交互的数据")])]),v._v(" "),_("p",[v._v("通过控制信息我们可以知道一个帧的起止比特位置，此外，也能使接收端检测出所收到的帧有无差错，如果发现差错，数据链路层能够简单的丢弃掉这个帧，以避免继续占用网络资源")]),v._v(" "),_("h3",{attrs:{id:"物理层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[v._v("#")]),v._v(" 物理层")]),v._v(" "),_("p",[v._v("作为"),_("code",[v._v("OSI")]),v._v(" 参考模型中最低的一层，物理层的作用是实现计算机节点之间比特流的透明传送")]),v._v(" "),_("p",[v._v("该层的主要任务是确定与传输媒体的接口的一些特性（机械特性、电气特性、功能特性，过程特性）")]),v._v(" "),_("p",[v._v("该层主要是和硬件有关，与软件关系不大")]),v._v(" "),_("h2",{attrs:{id:"三、传输过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、传输过程"}},[v._v("#")]),v._v(" 三、传输过程")]),v._v(" "),_("p",[v._v("数据在各层之间的传输如下图所示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/f3a89d40-b61e-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),v._v(" "),_("ul",[_("li",[v._v("应用层报文被传送到运输层")]),v._v(" "),_("li",[v._v("在最简单的情况下，运输层收取到报文并附上附加信息，该首部将被接收端的运输层使用")]),v._v(" "),_("li",[v._v("应用层报文和运输层首部信息一道构成了运输层报文段。附加的信息可能包括：允许接收端运输层向上向适当的应用程序交付报文的信息以及差错检测位信息。该信息让接收端能够判断报文中的比特是否在途中已被改变")]),v._v(" "),_("li",[v._v("运输层则向网络层传递该报文段，网络层增加了如源和目的端系统地址等网络层首部信息，生成了网络层数据报")]),v._v(" "),_("li",[v._v("网络层数据报接下来被传递给链路层，在数据链路层数据包添加发送端 MAC 地址和接收端 MAC 地址后被封装成数据帧")]),v._v(" "),_("li",[v._v("在物理层数据帧被封装成比特流，之后通过传输介质传送到对端")]),v._v(" "),_("li",[v._v("对端再一步步解开封装，获取到传送的数据")])]),v._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[v._v("#")]),v._v(" 参考文献")]),v._v(" "),_("ul",[_("li",[v._v("https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B")]),v._v(" "),_("li",[v._v("https://zhuanlan.zhihu.com/p/32059190")]),v._v(" "),_("li",[v._v("https://leetcode-cn.com/leetbook/detail/networks-interview-highlights/")]),v._v(" "),_("li",[v._v("https://vue3js.cn/interview")])])])}),[],!1,null,null,null);_.default=s.exports}}]);