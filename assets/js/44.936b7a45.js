(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{386:function(t,r,_){"use strict";_.r(r);var v=_(1),e=Object(v.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"一、什么是udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是udp"}},[t._v("#")]),t._v(" 一、什么是UDP")]),t._v(" "),_("p",[t._v("Internet 协议集支持一个无连接的传输协议，该协议称为用户数据包协议（UDP，User Datagram Protocol）。")]),t._v(" "),_("p",[t._v("UDP 为应用程序提供了一种无需建立连接就可以发送封装的 IP 数据包的方法。 "),_("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc768",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 768"),_("OutboundLink")],1),t._v("  描述了 UDP。")]),t._v(" "),_("p",[t._v("Internet 的传输层有两个主要协议，互为补充。无连接的是 UDP，它除了给应用程序发送数据包功能并允许它们在所需的层次上架构自己的协议之外，几乎没有做什么特别的事情。")]),t._v(" "),_("p",[t._v("面向连接的是 "),_("a",{attrs:{href:"https://baike.baidu.com/item/TCP/33012",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP"),_("OutboundLink")],1),t._v("，该协议几乎做了所有的事情。")]),t._v(" "),_("p",[t._v("UDP协议与TCP协议一样用于处理数据包，在OSI模型中，两者都位于传输层，处于IP协议的上一层。UDP有不提供数据包分组、组装和不能对数据包进行排序的缺点，也就是说，当报文发送之后，是无法得知其是否安全完整到达的。")]),t._v(" "),_("p",[t._v("UDP用来支持那些需要在计算机之间传输数据的网络应用。包括网络视频会议系统在内的众多的客户/服务器模式的网络应用都需要使用UDP协议。")]),t._v(" "),_("p",[t._v("UDP协议从问世至今已经被使用了很多年，虽然其最初的光彩已经被一些类似协议所掩盖，但即使在今天UDP仍然不失为一项非常实用和可行的网络传输层协议。")]),t._v(" "),_("h3",{attrs:{id:"二、udp报文格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、udp报文格式"}},[t._v("#")]),t._v(" 二、UDP报文格式")]),t._v(" "),_("p",[t._v("在UDP协议层次模型中，UDP位于IP层之上。应用程序访问UDP层然后使用IP层传送数据包。IP数据包的数据部分即为UDP数据包。IP层的报头指明了源主机和目的主机地址，而UDP层的报头指明了主机上的源端口和目的端口。")]),t._v(" "),_("p",[t._v("UDP传输的段（segment）有8个字节的报头和有效载荷字段构成。 UDP报头由4个域组成，其中每个域各占用2个字节，具体包括源端口号、目标端口号、数据包长度、校验值。")]),t._v(" "),_("p",[t._v("以下将对UDP数据报格式进行简要介绍，具体内容请参照"),_("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc768",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 768"),_("OutboundLink")],1),t._v("  。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/udp-struct.png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("长度")])]),t._v(" "),_("p",[t._v("数据报的长度是指包括报头和数据部分在内的总字节数。因为报头的长度是固定的，所以该域主要被用来计算可变长度的数据部分（又称为数据负载）。数据报的最大长度根据操作环境的不同而各异。")]),t._v(" "),_("p",[t._v("从理论上说，包含报头在内的数据报的最大长度为65535字节。不过，一些实际应用往往会限制数据报的大小，有时会降低到8192字节。")]),t._v(" "),_("p",[_("strong",[t._v("校验值")])]),t._v(" "),_("p",[t._v("UDP协议使用报头中的校验值来保证数据的安全。校验值首先在数据发送方通过特殊的算法计算得出，在传递到接收方之后，还需要再重新计算。")]),t._v(" "),_("p",[t._v("如果某个数据报在传输过程中被第三方篡改或者由于线路噪音等原因受到损坏，发送和接收方的校验计算值将不会相符，由此UDP协议可以检测是否出错。")]),t._v(" "),_("p",[t._v("这与TCP协议是不同的，后者要求必须具有校验值。 许多链路层协议都提供错误检查，包括流行的以太网协议，也许你想知道为什么UDP也要提供检查和校验。")]),t._v(" "),_("p",[t._v("其原因是链路层以下的协议在源端和终端之间的某些通道可能不提供错误检测。虽然UDP提供有错误检测，但检测到错误时，UDP不做错误校正，只是简单地把损坏的消息段扔掉，或者给应用程序提供警告信息。")]),t._v(" "),_("h3",{attrs:{id:"三、主要特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、主要特点"}},[t._v("#")]),t._v(" 三、主要特点")]),t._v(" "),_("p",[t._v("UDP是一个无连接协议，传输数据之前源端和终端不建立连接，当它想传送时就简单地去抓取来自应用程序的数据，并尽可能快地把它扔到网络上。")]),t._v(" "),_("p",[t._v("在发送端，UDP传送数据的速度仅仅是受应用程序生成数据的速度、计算机的能力和传输带宽的限制；在接收端，UDP把每个消息段放在队列中，应用程序每次从队列中读一个消息段。")]),t._v(" "),_("p",[t._v("由于传输数据不建立连接，因此也就不需要维护连接状态，包括收发状态等，因此一台服务机可同时向多个客户机传输相同的消息。")]),t._v(" "),_("p",[t._v("UDP信息包的标题很短，只有8个字节，相对于TCP的20个字节信息包而言UDP的额外开销很小。 吞吐量不受拥挤控制算法的调节，只受应用软件生成数据的速率、传输带宽、源端和终端主机性能的限制。")]),t._v(" "),_("p",[t._v("UDP是面向报文的。发送方的UDP对应用程序交下来的报文，在添加首部后就向下交付给IP层。既不拆分，也不合并，而是保留这些报文的边界，因此，应用程序需要选择合适的报文大小。")]),t._v(" "),_("p",[t._v("虽然UDP是一个不可靠的协议，但它是分发信息的一个理想协议。例如，在屏幕上报告股票市场、显示航空信息等等。UDP也用在路由信息协议RIP（Routing Information Protocol）中修改路由表。")]),t._v(" "),_("p",[t._v("在这些应用场合下，如果有一个消息丢失，在几秒之后另一个新的消息就会替换它。UDP广泛用在多媒体应用中。")])])}),[],!1,null,null,null);r.default=e.exports}}]);